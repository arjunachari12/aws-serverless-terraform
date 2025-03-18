export const handler = async (event, context) => {
    console.log("Event Object:", JSON.stringify(event, null, 2)); // Logs incoming event
    console.log("Context Object:", JSON.stringify(context, null, 2)); // Logs function metadata

    try {
        // Extracting details from the event
        const requestMethod = event.httpMethod || "Unknown";
        const requestPath = event.path || "N/A";
        const queryParams = event.queryStringParameters || {};
        const requestBody = event.body ? JSON.parse(event.body) : {};

        // Logging extracted data
        console.log(`HTTP Method: ${requestMethod}`);
        console.log(`Request Path: ${requestPath}`);
        console.log("Query Parameters:", queryParams);
        console.log("Request Body:", requestBody);

        // Simulate an error if the event contains a `fail` query param
        if (queryParams.fail === "true") {
            throw new Error("Simulated error for testing.");
        }

        // Function response
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Lambda executed successfully!",
                httpMethod: requestMethod,
                path: requestPath,
                queryParams,
                requestBody,
                remainingTime: context.getRemainingTimeInMillis(),
                functionName: context.functionName,
                awsRequestId: context.awsRequestId
            }),
        };

    } catch (error) {
        console.error("Error Occurred:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
