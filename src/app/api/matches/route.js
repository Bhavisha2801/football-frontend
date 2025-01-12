import axios from 'axios';

const API_BASE_URL = "https://api.sportmonks.com/v3/football";
const API_KEY = "N5Ckb4TkZHUrvHbJJblmz57Ht0NvRnFvVudt5MxdgtfNqRmAwoPcXl72qdih"; // Replace with your actual API key

export async function GET(request) {
  const { searchParams } = new URL(request.url); // Extract query params
  const date = searchParams.get('date'); // Get the 'date' parameter

  if (!date) {
    return new Response(JSON.stringify({ error: "Date parameter is required" }), {
      status: 400,
    });
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/fixtures/date/${date}`, {
      params: { api_token: API_KEY },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error fetching match data:", error.message);
    return new Response(
      JSON.stringify({ error: "Failed to fetch match data" }),
      { status: 500 }
    );
  }
}
