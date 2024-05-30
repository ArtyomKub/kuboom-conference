'use client'
import React, {useState} from 'react';
import HomeCard from '@/components/HomeCard';

const MeetingTypeList = () => {
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()

    return (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <HomeCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                descriptions="Start an instant meeting"
                handleClick={() => setMeetingState('isJoiningMeeting')}
            />
            <HomeCard
                img="/icons/schedule.svg"
                title="Schedule Meeting"
                descriptions="Plan your meeting"
                handleClick={() => setMeetingState('isScheduleMeeting')}
            />
            <HomeCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                descriptions="Start an instant meeting"
                handleClick={() => setMeetingState('isJoiningMeeting')}
            />
            <HomeCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                descriptions="Start an instant meeting"
                handleClick={() => setMeetingState('isJoiningMeeting')}
            />
        </section>
    );
};

export default MeetingTypeList;