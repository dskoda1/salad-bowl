import React from 'react';
import usePresence from 'hooks/usePresence';
import { useSelector } from 'react-redux';

const GamePlayer = () => {
  const roomId = useSelector((state) => state.room.joinRoomId);
  const userId = useSelector((state) => state.root.userId);
  usePresence(`roomsRemotePlayers/${roomId}/${userId}`, true);
  return <div>hello player in room {roomId}!</div>;
};

export default GamePlayer;
