Package.describe({
    summary: "flot is a library for jQuery, with a focus on simple usage, attractive looks and interactive features"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files(['/lib/jquery.flot.min.js','/lib/jquery.flot.pie.min.js','/lib/jquery.flot.resize.min.js'], 'client');
});