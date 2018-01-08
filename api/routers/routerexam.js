import controllexam from "../controlls/controllexam";
const routerexam = (app)=>{
    app.route('/')
        .get(controllexam.exam_get);
}
export default routerexam;
