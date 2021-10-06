const handleSignIn = document.getElementById("handleSignIn");
const handleSignUp = document.getElementById("handleSignUp");
const handleApply = document.getElementById("handleApply");
const handleList = document.getElementById("handleList");

const signIn = () => {
  handleSignIn.style.display = "block ";
  handleSignUp.style.display = "none";
  handleApply.style.display = "none";
  handleList.style.display = "none";
};

const signUp = () => {
  handleSignIn.style.display = "none ";
  handleSignUp.style.display = "block";
  handleApply.style.display = "none";
  handleList.style.display = "none";
};
const apply = () => {
  handleSignIn.style.display = "none ";
  handleSignUp.style.display = "none";
  handleApply.style.display = "block";
  handleList.style.display = "none";
};
const applyList = () => {
  handleSignIn.style.display = "none ";
  handleSignUp.style.display = "none";
  handleApply.style.display = "none";
  handleList.style.display = "block";
};
