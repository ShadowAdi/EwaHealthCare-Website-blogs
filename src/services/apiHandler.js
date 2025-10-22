
const BASE_URL = 'https://myewacare.com/api'

export const handleApiRequest = async ({ url, method = 'GET', data = null, extraHeaders = {}, responseType = 'json' }) => {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...extraHeaders,
            },
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(BASE_URL + url, options);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        //   const responseData = await response.json();
        let responseData;
        if (responseType === 'blob') {
            responseData = await response.blob();
        } else if (responseType === 'text') {
            responseData = await response.text();
        } else {
            responseData = (await response.json())?.data;
        }

        return { success: true, data: responseData };
    } catch (error) {
        console.error('API request failed:', error);
        return { success: false, error: error.message };
    }
};

// Example usage:
// const result = await handleApiRequest('https://myewacare.com/api/form', 'POST', formData);
// if (result.success) {
//   console.log('API call successful:', result.data);
// } else {
//   console.error('API call failed:', result.error);
// }
