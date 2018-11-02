export async function getViewExam(req,res) {
  console.log(req.user);
  res.render('exam');
}
