abstract class People {
    sleep() {
        console.log('Sleeping...');
    }

    wakeUp() {
        console.log('Why did you wake me up? :\'(');
    }

    abstract speak(): void // Specify tone and pitch
}