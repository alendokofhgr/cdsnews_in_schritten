console.log("Initialisierung Supabase");

// Supabase Initialisierung
const supabaseUrl = 'eigene_url_eintragen'
const supabaseKey = 'eigenen_key_eintragen'
const supa = supabase.createClient(supabaseUrl, supabaseKey, {
    auth: {
        redirectTo: window.location.origin,  // This will redirect back to the page where the request originated from
    },
});

export { supa }