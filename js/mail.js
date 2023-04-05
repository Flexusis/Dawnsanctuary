$(document).ready(function () {
  emailjs.init("proUPfVmD5ju2gfxN");
  //"user_xxxxx"이 부분은 사용자마다 다르니 반드시 emailJS의 installation 화면을 확인
  $("input[name=submit]").click(function () {
    var templateParams = {
      //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
      name: $("input[name=name]").val(),
      email: $("input[name=email]").val(),
      message: $("textarea[name=message]").val(),
    };

    emailjs
      .send("service_vr9sezf", "template_ts9j9a1", templateParams)
      //emailjs.send('service_q79p4ci', 'template ID', 보낼 내용이 담긴 객체)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("메일이 전송되었습니다!");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("에러:/");
        }
      );
  });
});
