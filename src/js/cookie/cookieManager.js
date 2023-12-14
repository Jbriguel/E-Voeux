import { useCookies } from "vue3-cookies";


const Ipsave_key = "ipSaveState";

function ipSetSave(value) {
    const { cookies } = useCookies();
    cookies.set(Ipsave_key, value);
    return true;
}

function ipIsSave() {
    const { cookies } = useCookies();
    let old_cookie_value = cookies.get(Ipsave_key);
    if (old_cookie_value == true) { return true };
    return false;
}

export {ipSetSave, ipIsSave}