const obterIP = (() => { 
    let ipEmCache = null, buscandoPromessa = null; 
    const buscarIP = () => buscandoPromessa ?? (buscandoPromessa = Promise.race([
        'https://api.ipify.org?format=json', 
        'https://jsonip.com',
        'https://api.ipapi.is/'
    ].map(url => 
        fetch(url, { method: 'GET', mode: 'cors', cache: 'no-store' })
            .then(r => r.json())
            .then(({ ip }) => ip)
    )).then(ip => (ipEmCache = ip, setTimeout(() => { ipEmCache = null; buscandoPromessa = null; }, 60000), ip)).catch(() => null)); 
    return () => ipEmCache ? Promise.resolve(ipEmCache) : buscarIP(); 
})();

export default obterIP;
