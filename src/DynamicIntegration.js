import React, { useEffect } from "react";
import { DynamicContextProvider, useDynamicContext } from "@dynamic-labs/sdk-react-core";

const environmentId = "7ec93c10-e380-47f9-87e0-cdbf55723eac";

function DynamicModalTrigger() {
    const { openModal } = useDynamicContext();

    useEffect(() => {
        const handleButtonClick = () => {
            openModal();
        };

        window.addEventListener("openDynamicModal", handleButtonClick);

        return () => {
            window.removeEventListener("openDynamicModal", handleButtonClick);
        };
    }, [openModal]);

    return null; // This component doesn't render anything by itself
}

export default function DynamicIntegration() {
    return (
        <DynamicContextProvider environmentId={environmentId}>
            <DynamicModalTrigger />
        </DynamicContextProvider>
    );
}
