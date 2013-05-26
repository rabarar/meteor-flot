Package.describe({
    summary: "flot is a library for jQuery, with a focus on simple usage, attractive looks and interactive features"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files(['jquery.flot.min.js','jquery.flot.pie.min.js','jquery.flot.resize.min.js'], 'client');
});