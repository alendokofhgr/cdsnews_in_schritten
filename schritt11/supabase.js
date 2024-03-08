console.log("Initialisierung Supabase");

// Supabase Initialisierung
const supabaseUrl = 'https://ughttwxwygsxfulngzdr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnaHR0d3h3eWdzeGZ1bG5nemRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzMDQ3MDcsImV4cCI6MjAxMDg4MDcwN30.SBN980B1BlVdcBoJR3DCrlLVkyI9w4CpIvE1a12bNaY'
const supa = supabase.createClient(supabaseUrl, supabaseKey, {
    auth: {
        redirectTo: window.location.origin,  // This will redirect back to the page where the request originated from
    },
});

export { supa }