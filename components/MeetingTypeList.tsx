import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStreamVideoClient, Call } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import MeetingModal from "@/components/MeetingModal"; // Import MeetingModal
import { useToast } from "@/components/ui/use-toast"; // Ensure you import the toast hook

const MeetingTypeList = ({ tutorId }: { tutorId: string }) => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<"isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined>();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const [callDetails, setCallDetails] = useState<Call | null>(null);
  const { toast } = useToast(); // Initialize the toast

  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      const id = crypto.randomUUID(); // Create a random meeting ID
      const call = client.call("default", id); // Initialize the call

      if (!call) throw new Error("Failed to create call");

      const startsAt = new Date().toISOString(); // Current time for the meeting start
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description: "Meeting Description", // Add any description if needed
          },
        },
      }); // Create the call

      setCallDetails(call); // Store call details

      router.push(`/meeting/${id}`); // Redirect to the meeting page with the ID
      toast({ title: "Meeting Created", description: `Meeting ID: ${id}` }); // Show success message
    } catch (error) {
      console.error(error);
      toast({ title: "Failed to create Meeting" }); // Show error message
    }
  };

  return (
    <div>
      <button
        onClick={() => setMeetingState("isJoiningMeeting")} // Open modal on button click
        className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 mt-2 hover:bg-blue-600 transition"
      >
        Join Video Call
      </button>

      <MeetingModal
        isOpen={Boolean(meetingState)}
        onClose={() => setMeetingState(undefined)}
        title="Join Meeting"
        handleClick={createMeeting} // Adjusted to createMeeting
        buttonText="Create Meeting"
      >
        {/* Additional content or form inputs can go here */}
      </MeetingModal>
    </div>
  );
};

export default MeetingTypeList;
