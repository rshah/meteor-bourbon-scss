Package.describe({
    summary: "Bourbon - A simple and lightweight mixin library for SASS(scss version)"
});

Package.on_use(function (api) {
    api.use('scss', ['client', 'server']);
    api.imply('scss', ['client', 'server']);
});