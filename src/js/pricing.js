// wartości ułożone są w nawiasach kwadratowych wg klucza wielkości auta:
// [małe, średnie, duże i SUV, duże SUV i większe]
// czas wykonania podajemy w godzinach
// gdy nie pełna godzina wartości dziesiętne podajemy po kropce

const pricingObj = {
// koszt wykonania
p_prz_szb: [400,450,500,550],             // przyciemnianie szyb
p_prz_lmp: [350,350,350,350],             // przyciemnianie lamp
p_dechrm: [800,800,800,800],              // dechroming
p_zm_kl_cl_at: [5000,6000,8000,10000],    // zmiana koloru całego auta
p_okl_dch: [600,700,800,850],             // oklejanie dachu 
p_okl_lst: [200,200,250,250],             // oklejanie lusterek

p_ods_lak: [700,800,950,1100],            // odswieżanie lakieru
p_kor_lak: [1200,1300,1500,1700],         // korekta lakieru
p_wosk: [200,250,300,350],                // woskowanie
p_crm_1: [700,850,1000,1200],             // ceramika 1rok
p_crm_3: [1100,1300,1500,1700],           // ceramika 3lata 
p_crm_4: [1700,1900,2100,2300],           // ceramika 4lata

p_fol_bik: [1500,1800,2300,2600],         // folia bikini
p_fol_full_frn: [4000,4500,5500,6000],    // folia full front
p_fol_full_bdy: [8000,10000,14000,16000], // folia full body

p_ref_crm: [300,300,300,300],             // reflektory ceramika
p_ref_fol: [500,500,500,500],             // reflektory folia
p_flg_crm: [400,400,400,400],             // felgi cermaika
p_szb_crm: [250,300,350,350],             // szyby ceramika
p_dach_cabr: [400,400,400,400],           // impregnacja dach cabrio
p_wsk_lak_bez_pol: [400,500,650,700],     // woskowanie lakieru bez polerowania

// czas wykonania
t_prz_szb: [2.5,3,4,5],            // przyciemnianie szyb
t_prz_lmp: [1,3,3,3.5],            // przyciemnianie lamp
t_dechrm: [5,7,9,12],              // dechroming
t_zm_kl_cl_at: [16,24,32,40],      // zmiana koloru całego auta
t_okl_dch: [2,2,3,4],              // oklejanie dachu 
t_okl_lst: [0.5,0.5,0.5,1],        // oklejanie lusterek
t_ods_lak: [8,10,12,16],           // odswieżanie lakieru
t_kor_lak: [12,14,16,20],          // korekta lakieru
t_wosk: [1.5,2,2,3.5],             // woskowanie
t_crm_1: [10,10.5,11,12],          // ceramika 1rok
t_crm_3: [10,10.5,11,12],          // ceramika 3lata 
t_crm_4: [10,10.5,11,12],          // ceramika 4lata
t_fol_bik: [12,12,16,20],          // folia bikini
t_fol_full_frn: [16,18,24,28],     // folia full front
t_fol_full_bdy: [24,32,40,48],     // folia full body
t_ref_crm: [3,3,3,4],              // reflektory ceramika
t_ref_fol: [3,3,3,4],              // reflektory folia
t_flg_crm: [1.5,1.5,2.5,2.5],      // felgi cermaika
t_szb_crm: [2,2,2.5,2.5],          // szyby ceramika
t_dach_cabr: [16,16,16,16],        // impregnacja dach cabrio
t_wsk_lak_bez_pol: [3.5,4,5,6],    // woskowanie lakieru bez polerowania
}

export default pricingObj