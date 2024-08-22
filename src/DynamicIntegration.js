import { DynamicContextProvider, useDynamicContext } from "@dynamic-labs/sdk-react-core";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

// Set up the environment ID for Dynamic.xyz
const environmentId = "7ec93c10-e380-47f9-87e0-cdbf55723eac";

function DynamicIntegration() {
    const context = useDynamicContext();

    useEffect(() => {
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

// Render the DynamicIntegration component
ReactDOM.render(
    <DynamicContextProvider environmentId={environmentId}>
        <DynamicIntegration />
    </DynamicContextProvider>,
    document.getElementById('root') || document.createElement('div')
);
