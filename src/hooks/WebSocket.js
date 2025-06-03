import { useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

export default function useWebSocket(listId, onMessage) {
    const clientRef = useRef(null);

    useEffect(() => {
        const socket = new SockJS('/ws');
        const client = new Client({
            webSocketFactory: () => socket,
            debug: () => {},

            onConnect: () => {
                client.subscribe(`/topic/lists/${listId}`, (message) => {
                    const body = JSON.parse(message.body);
                    onMessage(body);
                });
            },

            reconnectDelay: 5000,
        });

        client.activate();
        clientRef.current = client;

        return () => {
            if (clientRef.current) {
                clientRef.current.deactivate();
            }
        };
    }, [listId, onMessage]);
}