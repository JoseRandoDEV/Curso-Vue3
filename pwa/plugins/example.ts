export default {
    install: (app:any, options:any) => {
        app.config.globalProperties.$count = () => 0;
        app.config.globalProperties.$saySomething = () => alert(options.message);
    }
}
