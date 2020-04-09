import React from 'react';
import usePresence from 'hooks/usePresence';
import { useSelector } from 'react-redux';

const GameManager = () => {
  const roomId = useSelector((state) => state.room.id);
  const userId = useSelector((state) => state.root.userId);
  usePresence(`roomsData/${roomId}`, true);
  usePresence(`roomsRemotePlayers/${roomId}/${userId}`, true);

  return <div>hello owner of room {roomId}!</div>;
};

export default GameManager;
