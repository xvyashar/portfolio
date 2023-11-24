declare module 'customTypes' {
    type BaseComponent = {
        className?: string;
    }

    interface DesktopNavComponent extends BaseComponent {
        callback?: Function;
      }
}

module.exports = {
    BaseComponent,
};