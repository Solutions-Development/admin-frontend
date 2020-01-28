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
 reply.render("dashboard");   
}
exports.conferencistas = async (req, reply) => {
    reply.render("conferencistas");
}
exports.congreso = async (req, reply) => {
    reply.render("congreso");
}
exports.docs = async (req, reply) => {
    reply.render("docs");
}
exports.eventos = async (req, reply) => {
    reply.render("eventos");
}
exports.sedes = async (req, reply) => {
    reply.render("sedes");
}
exports.usuarios = async (req, reply) => {
    reply.render("usuarios");
}
