import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey);

export async function signIn_Supabase(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (error) {
        console.error('Error signing in:', error);
        return null;
    }
    return data;
}

export async function signOut_Supabase() {
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.error('Error signing out:', error);
        return null;
    }
    return true;
}

export async function get_rendezvous(after_today : boolean = false) {
    if (after_today) {
        const { data, error } = await supabase
            .from('rendezvous')
            .select('*')
            .gt('date', new Date().toISOString())
        if (error) {
            console.error('Error fetching rendezvous:', error);
            return null;
        }
        return data;
    } else {
        const { data, error } = await supabase
            .from('rendezvous')
            .select('*')
        if (error) {
            console.error('Error fetching rendezvous:', error);
            return null;
        }
        return data;
    }
}