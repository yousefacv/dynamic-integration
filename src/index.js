import React from 'react';
import ReactDOM from 'react-dom';
import { DynamicContextProvider, useDynamicContext } from "@dynamic-labs/sdk-react-core";

const environmentId = "7ec93c10-e380-47f9-87e0-cdbf55723eac";

function DynamicIntegration() {
    const context = useDynamicContext();

    React.useEffect(() => {
        console.log("DynamicIntegration useEffect triggered");

        if (!context || !context.client) {
            console.error("DynamicContext or client is not available");
            return;
        }

        const handleModalOpen = () => {
            console.log("openDynamicModal event detected");
            try {
                context.client.ui.auth.show(); // Attempt to open the auth modal
                console.log("Authentication modal should have opened");
            } catch (error) {
                console.error("Failed to open authentication modal:", error);
            }
        };

        window.addEventListener("openDynamicModal", handleModalOpen);

        return () => {
            window.removeEventListener("openDynamicModal", handleModalOpen);
        };
    }, [context]);

    return null; // This component does not render anything by itself
}

ReactDOM.render(
    <DynamicContextProvider environmentId={environmentId}>
        <DynamicIntegration />
    </DynamicContextProvider>,
    document.getElementById('root')
);
