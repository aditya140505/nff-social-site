document.getElementById("airdrop-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let twitter = document.getElementById("twitter").value;
    let telegram = document.getElementById("telegram").value;
    let solana = document.getElementById("solana").value;

    alert(`Thank you for joining the airdrop!\nTwitter: ${twitter}\nTelegram: ${telegram}\nSolana Wallet: ${solana}`);
    
    // You can send this data to a backend API later
});
