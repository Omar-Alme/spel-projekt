interface IScene {
    update(): void;
    draw(): void;

    mousePressed?(): void;
    keyPressed?(): void;
    
}

//interface för att byta scen
interface IChangeableScene {
  changeActiveScene(scene: IScene): void;

}