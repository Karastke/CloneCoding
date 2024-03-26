class BankAccount{
    constructor(balance){
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${amount}원 만큼 입금되었습니다. 현재 총 잔액은 ${this.balance}입니다.`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return 1;
            console.log("잔액이 부족합니다.");
        }
        this.balance -= amount;
        console.log(`${amount} 원 만큼 출금되었습니다. 현재 총 잔액은 ${this.balance}입니다.`);
    }

    display() {
        console.log(`현재 잔액은 ${this.balance}원 만큼 있습니다.`);
    }
}

bank = new BankAccount(1000);

bank.deposit(1000);
bank.withdraw(300);
bank.display();
