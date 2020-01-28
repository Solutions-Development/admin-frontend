exports.root = async (req, reply) => {
    reply.render("login");
}
exports.auth = async (req, reply) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === "admin" && password === "admin") {
        reply.render("dashboard", { user: username });
    } else {
        reply.send({ message: "Usuario o clave incorrecta"});
    }
}
exports.dashboard = async (req, reply) => {
 reply.render("dashboard", { user: req.params.user });   
}
exports.conferencistas = async (req, reply) => {
    reply.render("conferencistas", { user: req.params.user });
}
exports.congreso = async (req, reply) => {
    reply.render("congreso", { user: req.params.user });
}
exports.docs = async (req, reply) => {
    reply.render("docs", { user: req.params.user });
}
exports.eventos = async (req, reply) => {
    reply.render("eventos", { user: req.params.user });
}
exports.sedes = async (req, reply) => {
    reply.render("sedes", { user: req.params.user });
}
exports.usuarios = async (req, reply) => {
    reply.render("usuarios", { user: req.params.user });
}
