class Button {
    private label: string;
    private color: string;
    private position: p5.Vector;
    private width: number;
    private height: number;

    constructor(
        label: string,
        position: p5.Vector,
        buttonWidth: number = 200,
        buttonHeight: number = 40
    ) {
        this.label = label;
        this.color = "Maroon";
        this.position = position;
        this.width = buttonWidth;
        this.height = buttonHeight;
    }

    public isClicked(): boolean {
        const isMouseOver =
            mouseX > this.position.x - this.width / 2 &&
            mouseX < this.position.x + this.width / 2 &&
            mouseY > this.position.y - this.height / 2 &&
            mouseY < this.position.y + this.height / 2;

        if (isMouseOver && mouseIsPressed) {
            console.log(this.label, "button clicked");
            return true;
        }
        return false;
    }

    public draw(): void {
        this.drawBackground();
        this.drawLabel();
    }

    private drawLabel(): void {
        push();
        textAlign(CENTER, CENTER);
        fill("white");
        textFont("Pixelify Sans", 24);
        textStyle(BOLD);
        text(this.label, this.position.x, this.position.y);
        pop();
    }

    private drawBackground(): void {
        push();
        noStroke();
        rectMode(CENTER);

        const isMouseOver =
            mouseX > this.position.x - this.width / 2 &&
            mouseX < this.position.x + this.width / 2 &&
            mouseY > this.position.y - this.height / 2 &&
            mouseY < this.position.y + this.height / 2;

        // Pixelated Button shapes
        fill("red");
        rect(this.position.x, this.position.y, this.width + 10, this.height - 10);

        fill("red");
        rect(this.position.x, this.position.y, this.width - 10, this.height + 10);

        fill(isMouseOver ? "red" : this.color);
        rect(this.position.x, this.position.y, this.width, this.height);

        pop();
    }
}
