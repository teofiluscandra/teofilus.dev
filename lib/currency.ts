export default function currency(amount: string) {
    amount = parseFloat(amount).toFixed(0);
    amount = amount.replace(/(\d)(?=(\d{3})+\b)/g, '$1.');
    return amount;
}