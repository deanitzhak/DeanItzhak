/*Global Variables*/ 
var ScreenFlag = 0;
var onWork = 0;
/*HTML elements*/
let Header_Holder = document.getElementById("Header_Holder");
let Cloud_About = document.getElementById("Cloud_About");
let Floppy_Disk_Line = document.getElementById("Floppy_Disk_Line");
let Profile = document.getElementById("Profile");
let Title = document.getElementById("Title");
let My_belief = document.getElementById("My_belief");
let Floppy_Disk = document.getElementById("Floppy_Disk");
let Cloud_Work = document.getElementById("Cloud_Work");
let Cloud_Contact = document.getElementById("Cloud_Contact");
let element = document.getElementById("element");
let welcome_Holder = document.getElementById("welcome_Holder");
let Welcome = document.getElementById("Welcome");
let Nav_Holder = document.getElementById("Nav_Holder");
let Contact = document.getElementById("Contact");
let Work = document.getElementById("Work");
let About = document.getElementById("About");
let Education_Holder = document.getElementById("Education_Holder");
let Shenkar_des = document.getElementById("Shenkar_des");
let Form_Holder = document.getElementById("Form_Holder");
let Contact_Form = document.getElementById("Contact_Form");
let Your_Name = document.getElementById("Your_Name");
let Your_Email = document.getElementById("Your_Email");
let Subject = document.getElementById("Subject");
let Message = document.getElementById("Message");
let Name_input = document.getElementById("Name_input");
let Email_input = document.getElementById("Email_input");
let Subject_input = document.getElementById("Subject_input");
let Message_area = document.getElementById("Message_area");
let subnmitBTN = document.getElementById("subnmitBTN");
let Work_Holder = document.getElementById("Work_Holder");
let Photography_Holder = document.getElementById("Photography_Holder");
let Photography_Title = document.getElementById("Photography_Title");
let Photography_Image_Thumb = document.getElementById("Photography_Image_Thumb");
let Left_Holder_Potography = document.getElementById("Left_Holder_Potography");
let Right_Holder_Potography = document.getElementById("Right_Holder_Potography");
let Photography_Desc = document.getElementById("Photography_Desc");
let Codes_Holder = document.getElementById("Codes_Holder");
let Codes_Title = document.getElementById("Codes_Title");
let Codes_Desc = document.getElementById("Codes_Desc");
let Codes_Image_Thumb = document.getElementById("Codes_Image_Thumb");
let Left_Holder_Codes = document.getElementById("Left_Holder_Codes");
let Right_Holder_Codes = document.getElementById("Right_Holder_Codes");
let Gallery_Photos_Holder= document.getElementById("Gallery_Photos_Holder");
let First_Gallery = document.getElementById("First_Gallery");
let First_Gallery_Title = document.getElementById("First_Gallery_Title");
let Gallery_Item = document.getElementsByClassName("Gallery_Item");
let Gallery_Item_First= document.getElementById("Gallery_Item_First");
let Gallery_Item_Second = document.getElementById("Gallery_Item_Second");
let Gallery_Item_Third = document.getElementById("Gallery_Item_Third");
let Gallery_Item_Forth = document.getElementById("Gallery_Item_Forth");
let Gallery_Item_Fifth = document.getElementById("Gallery_Item_Fifth");
let Second_Gallery_Title = document.getElementById("Second_Gallery_Title");
let Second_Gallery = document.getElementById("Second_Gallery");
let Second_Gallery_Item_First = document.getElementById("Second_Gallery_Item_First");
let Second_Gallery_Item_Second = document.getElementById("Second_Gallery_Item_Second");
let Second_Gallery_Item_Third = document.getElementById("Second_Gallery_Item_Third");
let Second_Gallery_Item_Forth = document.getElementById("Second_Gallery_Item_Forth");
let Second_Gallery_Item_Fifth = document.getElementById("Second_Gallery_Item_Fifth");
let Third_Gallery_Title = document.getElementById("Third_Gallery_Title");
let Third_Gallery = document.getElementById("Third_Gallery");
let Third_Gallery_Item_First = document.getElementById("Third_Gallery_Item_First");
let Third_Gallery_Item_Second = document.getElementById("Third_Gallery_Item_Second");
let Third_Gallery_Item_Third = document.getElementById("Third_Gallery_Item_Third");
let Third_Gallery_Item_Forth = document.getElementById("Third_Gallery_Item_Forth");
let Third_Gallery_Item_Fifth = document.getElementById("Third_Gallery_Item_Fifth");
let Gallery_Codes_Holder = document.getElementById("Gallery_Codes_Holder");
let Work_Codes_Title = document.getElementById("Work_Codes_Title");
let First_Code_Title = document.getElementById("First_Code_Title");
let First_Code = document.getElementById("First_Code");
let Upper_Code = document.getElementById("Upper_Code");
let Main_Image = document.getElementById("Main_Image");
let Codes_Main_Desc = document.getElementById("Codes_Main_Desc");
let First_Codes_Main_Desc_P = document.getElementById("First_Codes_Main_Desc_P");
let Lower_Code = document.getElementById("Lower_Code");
let First_Codes_Image = document.getElementById("First_Codes_Image");
let Second_Codes_Image = document.getElementById("Second_Codes_Image");
let Third_Codes_Image = document.getElementById("Third_Codes_Image");
let Second_Code_Title = document.getElementById("Second_Code_Title");
let Second_Code = document.getElementById("Second_Code");
let Second_Upper_Code = document.getElementById("Second_Upper_Code");
let Second_Main_Image = document.getElementById("Second_Main_Image");
let Second_Codes_Main_Desc = document.getElementById("Second_Codes_Main_Desc");
let Second_Codes_Main_Desc_P = document.getElementById("Second_Codes_Main_Desc_P");
let Second_Lower_Code = document.getElementById("Second_Lower_Code");
let Second_First_Codes_Image = document.getElementById("Second_First_Codes_Image");
let Second_Second_Codes_Image = document.getElementById("Second_Second_Codes_Image");
let Second_Third_Codes_Image = document.getElementById("Second_Third_Codes_Image");
let Third_Code_Title = document.getElementById("Third_Code_Title");
let Third_Code = document.getElementById("Third_Code");
let Third_Upper_Code = document.getElementById("Third_Upper_Code");
let Third_Main_Image = document.getElementById("Third_Main_Image");
let Third_Codes_Main_Desc = document.getElementById("Third_Codes_Main_Desc");
let Third_Codes_Main_Desc_P = document.getElementById("Third_Codes_Main_Desc_P");
let Third_Lower_Code = document.getElementById("Third_Lower_Code");
let Third_First_Codes_Image = document.getElementById("Third_First_Codes_Image");
let Third_Second_Codes_Image = document.getElementById("Third_Second_Codes_Image");
let BackButton = document.getElementsByClassName("BackButton");
let b6_Item = document.getElementById("b6_Item");
let NetcraftAcademy_Item = document.getElementById("NetcraftAcademy_Item");
let Jhon_Item = document.getElementById("Jhon_Item");
let Shenkar_Item = document.getElementById("Shenkar_Item");
/* requirements to loading */
HomeScreen_Hide_Elements();
/*Listener*/
window.onload = LoadScreens();
window.addEventListener('resize',LoadScreens);
/*Click listener*/
Cloud_About.onclick = Cloud_About_Click;
Floppy_Disk.onclick = Floppy_Disk_Click;
Cloud_Contact.onclick = Cloud_Contact_Click;
Cloud_Work.onclick = Cloud_Work_Click;
Photography_Image_Thumb.onclick = Photography_Image_Click;
Photography_Title.onclick = Photography_Image_Click;
Codes_Image_Thumb.onclick = Codes_Image_Thumb_Click;
Codes_Title.onclick = Codes_Image_Thumb_Click;
BackButton[0].onclick = BackButton_Click;
BackButton[1].onclick = BackButton_Click;
Contact.onclick = Contact_Click;
Work.onclick = Work_Click;
About.onclick= About_Click;
/*Hover in Listener*/
Cloud_About.onmouseover = Cloud_About_Over;
Cloud_Work.onmouseover = Cloud_Work_Over;
Cloud_Contact.onmouseover = Cloud_Contact_Over;
Floppy_Disk_Line.onmouseover = Floppy_Disk_Line_Over;
About.onmouseover = About_Over;
Work.onmouseover = Work_Over;
Contact.onmouseover = Contact_Over;
Floppy_Disk.onmouseover = Floppy_Disk_Over;
Codes_Image_Thumb.onmouseover = Codes_Image_Thumb_Over;
Photography_Image_Thumb.onmouseover = Photography_Image_Thumb_Over;
Gallery_Item_First.onmouseover = First_First_Over_B1028;
Gallery_Item_Second.onmouseover = First_Second_Over_B1028;
Gallery_Item_Third.onmouseover = First_Third_Over_B1028;
Gallery_Item_Forth.onmouseover = First_Forth_Over_B1028;
Gallery_Item_Fifth.onmouseover = First_Fifth_Over_B1028;
Second_Gallery_Item_First.onmouseover = Second_First_Over_B1028;
Second_Gallery_Item_Second.onmouseover = Second_Second_Over_B1028;
Second_Gallery_Item_Third.onmouseover = Second_Third_Over_B1028;
Second_Gallery_Item_Forth.onmouseover = Second_Forth_Over_B1028;
Second_Gallery_Item_Fifth.onmouseover = Second_Fifth_Over_B1028;
Third_Gallery_Item_First.onmouseover = Third_First_Over_B1028;
Third_Gallery_Item_Second.onmouseover = Third_Second_Over_B1028;
Third_Gallery_Item_Third.onmouseover = Third_Third_Over_B1028;
Third_Gallery_Item_Forth.onmouseover = Third_Forth_Over_B1028;
Third_Gallery_Item_Fifth.onmouseover = Third_Fifth_Over_B1028;
BackButton[0].onmouseover = BackButton_Over;
BackButton[1].onmouseover = BackButton_Over;
/*Hover Out Listener*/
Cloud_About.onmouseout = Cloud_About_Out;
Cloud_Work.onmouseout = Cloud_Work_Out;
Cloud_Contact.onmouseout = Cloud_Contact_Out;
Floppy_Disk_Line.onmouseout = Floppy_Disk_Line_Out;
About.onmouseout = About_Out;
Work.onmouseout = Work_Out;
Contact.onmouseout = Contact_Out;
Floppy_Disk.onmouseout = Floppy_Disk_Out;
Codes_Image_Thumb.onmouseout = Codes_Image_Thumb_Out;
Photography_Image_Thumb.onmouseout = Photography_Image_Thumb_Out;
BackButton[0].onmouseout = BackButton_Out;
BackButton[1].onmouseout = BackButton_Out;
/* loading screen */
/*Hover in*/
function LoadScreens()
{
    var w = window.innerWidth;
    if (ScreenFlag == 0)
    {
        if(w > 1453){
            Loading_Home_Page_B1430();
        }else if(w<1453 && w>1389 )
        {
            Loading_Home_Page_S1430_B1389();
        }else if(w<1389 && w>1177)
        {
            Loading_Home_Page_S1389_B1177();
        }else if(w<1177){
            Loading_Home_Page_S1177();
        }
    }else if(ScreenFlag == 1)
    {
        if(w > 1430)
        {
            Loading_About_Page_B1430();
        }else if(w<1430 && w>800)
        {
            Loading_About_Page_S1430_B800();
            Nav_Holder_B1177();
        }else if(w<800)
        {
            Loading_About_Page_S1430_B800();
            Resize_Nav_Holder_S_1177();

            Shenkar_Item.style.width = "fit-content";
            Jhon_Item.style.width = "fit-content";
            NetcraftAcademy_Item.style.width = "fit-content";
            b6_Item.style.width = "fit-content";
            Education_Holder.style.paddingBottom = "200px";
            
        }
    }else if(ScreenFlag == 2 && onWork == 0)
    {
        if(w>1030){
             Work_Loading_Page_B1430();
        }else if(w<1040){
            Work_Loading_Page_S1040();
        }
    }else if(ScreenFlag == 2 && onWork ==2){
            Codes_Image_Thumb_Click();

    }else if(ScreenFlag == 2 && onWork ==1){
        if(w>1030){
            Photography_B1130();
            Nav_Holder_B1177();
        }else if(w<1130 && w>800){
            Photography_S1130();
            Resize_Nav_Holder_S_1177();
        }else if(w<800){
            Photography_S800();
            Floppy_Disk_S1177();
            Resize_Nav_Holder_S_1177();
        }
    }
    else if(ScreenFlag == 3)
    {
        if(w > 1028)
        {
            Contact_Loading_Page_B1430();
        }
        else if(w<1140)
        {
            Contact_Loading_Page_S1140();
        }
    }
}
function Cloud_About_Over()
{
    Cloud_About.style.transform = "scale(1.2)";
}
function Cloud_Work_Over()
{
    Cloud_Work.style.transform = "scale(1.2)";
}
function Cloud_Contact_Over()
{
    Cloud_Contact.style.transform = "scale(1.2)";
}
function Floppy_Disk_Line_Over()
{
    Floppy_Disk_Line.style.transform = "scale(1.2)";
}
function Title_Over()
{
    Title.style.transform = "scale(1.2)";
}
function My_Belife_Over()
{
    My_belief.style.transform = "scale(1.05)";
}
function Welcome_Over(){
    Welcome.style.transform = "scale(1.2)";
}
function About_Over()
{
    if(ScreenFlag !=1){
        About.style.backgroundColor = "#133337";
        About.style.color = "white";
    }
}
function Work_Over(){
    if(ScreenFlag !=2){
        Work.style.backgroundColor = "#133337";
        Work.style.color = "white"; 
    }
}
function Contact_Over(){
    if(ScreenFlag !=3){
        Contact.style.backgroundColor = "#133337";
        Contact.style.color = "white";
    }

}
function Floppy_Disk_Over()
{
    Floppy_Disk.style.transform = "scale(1.2)";
}
function Codes_Image_Thumb_Over(){
    Codes_Image_Thumb.style.transform = "scale(1.03)";
}
function Photography_Image_Thumb_Over(){
    Photography_Image_Thumb.style.transform = "scale(1.03)";
}
function First_First_Over_B1028(){
    Gallery_Item_First.style.width = "40%";
    Gallery_Item_Second.style.width = "15%";
    Gallery_Item_Third.style.width = "15%";
    Gallery_Item_Forth.style.width = "15%";
    Gallery_Item_Fifth.style.width = "15%";
}
function First_Second_Over_B1028(){
    Gallery_Item_First.style.width = "15%";
    Gallery_Item_Second.style.width = "40%";
    Gallery_Item_Third.style.width = "15%";
    Gallery_Item_Forth.style.width = "15%";
    Gallery_Item_Fifth.style.width = "15%";
}
function First_Third_Over_B1028(){
    Gallery_Item_First.style.width = "15%";
    Gallery_Item_Second.style.width = "15%";
    Gallery_Item_Third.style.width = "40%";
    Gallery_Item_Forth.style.width = "15%";
    Gallery_Item_Fifth.style.width = "15%";
}
function First_Forth_Over_B1028(){
    Gallery_Item_First.style.width = "15%";
    Gallery_Item_Second.style.width = "15%";
    Gallery_Item_Third.style.width = "15%";
    Gallery_Item_Forth.style.width = "40%";
    Gallery_Item_Fifth.style.width = "15%";
}
function First_Fifth_Over_B1028(){
    Gallery_Item_First.style.width = "15%";
    Gallery_Item_Second.style.width = "15%";
    Gallery_Item_Third.style.width = "15%";
    Gallery_Item_Forth.style.width = "15%";
    Gallery_Item_Fifth.style.width = "40%";
}
function  Second_First_Over_B1028(){
    Second_Gallery_Item_First.style.width = "43%";
    Second_Gallery_Item_Second.style.width = "15%";
    Second_Gallery_Item_Third.style.width = "15%";
    Second_Gallery_Item_Forth.style.width = "15%";
    Second_Gallery_Item_Fifth.style.width = "15%";
}
function  Second_Second_Over_B1028(){
    Second_Gallery_Item_First.style.width = "15%";
    Second_Gallery_Item_Second.style.width = "43%";
    Second_Gallery_Item_Third.style.width = "15%";
    Second_Gallery_Item_Forth.style.width = "15%";
    Second_Gallery_Item_Fifth.style.width = "15%";
}
function  Second_Third_Over_B1028(){
    Second_Gallery_Item_First.style.width = "15%";
    Second_Gallery_Item_Second.style.width = "15%";
    Second_Gallery_Item_Third.style.width = "43%";
    Second_Gallery_Item_Forth.style.width = "15%";
    Second_Gallery_Item_Fifth.style.width = "15%";
}
function  Second_Forth_Over_B1028(){
    Second_Gallery_Item_First.style.width = "15%";
    Second_Gallery_Item_Second.style.width = "15%";
    Second_Gallery_Item_Third.style.width = "15%";
    Second_Gallery_Item_Forth.style.width = "43%";
    Second_Gallery_Item_Fifth.style.width = "15%";
}
function  Second_Fifth_Over_B1028(){
    Second_Gallery_Item_First.style.width = "15%";
    Second_Gallery_Item_Second.style.width = "15%";
    Second_Gallery_Item_Third.style.width = "15%";
    Second_Gallery_Item_Forth.style.width = "15%";
    Second_Gallery_Item_Fifth.style.width = "43%";
}
function  Third_First_Over_B1028(){
    Third_Gallery_Item_First.style.width = "43%";
    Third_Gallery_Item_Second.style.width = "15%";
    Third_Gallery_Item_Third.style.width = "15%";
    Third_Gallery_Item_Forth.style.width = "15%";
    Third_Gallery_Item_Fifth.style.width = "15%";
}
function  Third_Second_Over_B1028(){
    Third_Gallery_Item_First.style.width = "15%";
    Third_Gallery_Item_Second.style.width = "43%";
    Third_Gallery_Item_Third.style.width = "15%";
    Third_Gallery_Item_Forth.style.width = "15%";
    Third_Gallery_Item_Fifth.style.width = "15%";
}
function  Third_Third_Over_B1028(){
    Third_Gallery_Item_First.style.width = "15%";
    Third_Gallery_Item_Second.style.width = "15%";
    Third_Gallery_Item_Third.style.width = "43%";
    Third_Gallery_Item_Forth.style.width = "15%";
    Third_Gallery_Item_Fifth.style.width = "15%";
}
function  Third_Forth_Over_B1028(){
    Third_Gallery_Item_First.style.width = "15%";
    Third_Gallery_Item_Second.style.width = "15%";
    Third_Gallery_Item_Third.style.width = "15%";
    Third_Gallery_Item_Forth.style.width = "43%";
    Third_Gallery_Item_Fifth.style.width = "15%";
}
function  Third_Fifth_Over_B1028(){
    Third_Gallery_Item_First.style.width = "15%";
    Third_Gallery_Item_Second.style.width = "15%";
    Third_Gallery_Item_Third.style.width = "15%";
    Third_Gallery_Item_Forth.style.width = "15%";
    Third_Gallery_Item_Fifth.style.width = "43%";
}
function BackButton_Over(){
    BackButton[0].style.transform = "scale(1.2)";
    BackButton[1].style.transform = "scale(1.2)";
}
/*Photography_B1130()*/
function Photography_B1130(){
    Gallery_Item_First.onmouseover = First_First_Over_B1028;
    Gallery_Item_Second.onmouseover = First_Second_Over_B1028;
    Gallery_Item_Third.onmouseover = First_Third_Over_B1028;
    Gallery_Item_Forth.onmouseover = First_Forth_Over_B1028;
    Gallery_Item_Fifth.onmouseover = First_Fifth_Over_B1028;
    Second_Gallery_Item_First.onmouseover = Second_First_Over_B1028;
    Second_Gallery_Item_Second.onmouseover = Second_Second_Over_B1028;
    Second_Gallery_Item_Third.onmouseover = Second_Third_Over_B1028;
    Second_Gallery_Item_Forth.onmouseover = Second_Forth_Over_B1028;
    Second_Gallery_Item_Fifth.onmouseover = Second_Fifth_Over_B1028;
    Third_Gallery_Item_First.onmouseover = Third_First_Over_B1028;
    Third_Gallery_Item_Second.onmouseover = Third_Second_Over_B1028;
    Third_Gallery_Item_Third.onmouseover = Third_Third_Over_B1028;
    Third_Gallery_Item_Forth.onmouseover = Third_Forth_Over_B1028;
    Third_Gallery_Item_Fifth.onmouseover = Third_Fifth_Over_B1028;
}
/*Photography_S1130()*/
function Photography_S1130(){
    Gallery_Item_First.onmouseover = First_First_Over_S1130;
    Gallery_Item_Second.onmouseover = First_Second_Over_S1130;
    Gallery_Item_Third.onmouseover = First_Third_Over_S1130;
    Gallery_Item_Forth.onmouseover = First_Forth_Over_S1130;
    Gallery_Item_Fifth.onmouseover = First_Fifth_Over_S1130;
    Second_Gallery_Item_First.onmouseover = Second_First_Over_S1130;
    Second_Gallery_Item_Second.onmouseover = Second_Second_Over_S1130;
    Second_Gallery_Item_Third.onmouseover = Second_Third_Over_S1130;
    Second_Gallery_Item_Forth.onmouseover = Second_Forth_Over_S1130;
    Second_Gallery_Item_Fifth.onmouseover = Second_Fifth_Over_S1130;
    Third_Gallery_Item_First.onmouseover = Third_First_Over_S1130;
    Third_Gallery_Item_Second.onmouseover = Third_Second_Over_S1130;
    Third_Gallery_Item_Third.onmouseover = Third_Third_Over_S1130;
    Third_Gallery_Item_Forth.onmouseover = Third_Forth_Over_S1130;
    Third_Gallery_Item_Fifth.onmouseover = Third_Fifth_Over_S1130;
    Init_All_Item_Gallery_Holder_S1130();
    Work_Nav_Item_S1040();
}
function First_First_Over_S1130(){
    Gallery_Item_First.style.width = "100%";
    Gallery_Item_Second.style.width = "15%";
    Gallery_Item_Third.style.width = "15%";
    Gallery_Item_Forth.style.width = "15%";
    Gallery_Item_Fifth.style.width = "15%";
}
function First_Second_Over_S1130(){
    Gallery_Item_First.style.width = "15%";
    Gallery_Item_Second.style.width = "100%";
    Gallery_Item_Third.style.width = "15%";
    Gallery_Item_Forth.style.width = "15%";
    Gallery_Item_Fifth.style.width = "15%";
}
function First_Third_Over_S1130(){
    Gallery_Item_First.style.width = "15%";
    Gallery_Item_Second.style.width = "15%";
    Gallery_Item_Third.style.width = "100%";
    Gallery_Item_Forth.style.width = "15%";
    Gallery_Item_Fifth.style.width = "15%";
}
function First_Forth_Over_S1130(){
    Gallery_Item_First.style.width = "15%";
    Gallery_Item_Second.style.width = "15%";
    Gallery_Item_Third.style.width = "15%";
    Gallery_Item_Forth.style.width = "100%";
    Gallery_Item_Fifth.style.width = "15%";
}
function First_Fifth_Over_S1130(){
    Gallery_Item_First.style.width = "15%";
    Gallery_Item_Second.style.width = "15%";
    Gallery_Item_Third.style.width = "15%";
    Gallery_Item_Forth.style.width = "15%";
    Gallery_Item_Fifth.style.width = "100%";
}
function  Second_First_Over_S1130(){
    Second_Gallery_Item_First.style.width = "100%";
    Second_Gallery_Item_Second.style.width = "15%";
    Second_Gallery_Item_Third.style.width = "15%";
    Second_Gallery_Item_Forth.style.width = "15%";
    Second_Gallery_Item_Fifth.style.width = "15%";
}
function  Second_Second_Over_S1130(){
    Second_Gallery_Item_First.style.width = "15%";
    Second_Gallery_Item_Second.style.width = "100%";
    Second_Gallery_Item_Third.style.width = "15%";
    Second_Gallery_Item_Forth.style.width = "15%";
    Second_Gallery_Item_Fifth.style.width = "15%";
}
function  Second_Third_Over_S1130(){
    Second_Gallery_Item_First.style.width = "15%";
    Second_Gallery_Item_Second.style.width = "15%";
    Second_Gallery_Item_Third.style.width = "100%";
    Second_Gallery_Item_Forth.style.width = "15%";
    Second_Gallery_Item_Fifth.style.width = "15%";
}
function  Second_Forth_Over_S1130(){
    Second_Gallery_Item_First.style.width = "15%";
    Second_Gallery_Item_Second.style.width = "15%";
    Second_Gallery_Item_Third.style.width = "15%";
    Second_Gallery_Item_Forth.style.width = "100%";
    Second_Gallery_Item_Fifth.style.width = "15%";
}
function  Second_Fifth_Over_S1130(){
    Second_Gallery_Item_First.style.width = "15%";
    Second_Gallery_Item_Second.style.width = "15%";
    Second_Gallery_Item_Third.style.width = "15%";
    Second_Gallery_Item_Forth.style.width = "15%";
    Second_Gallery_Item_Fifth.style.width = "100%";
}
function  Third_First_Over_S1130(){
    Third_Gallery_Item_First.style.width = "100%";
    Third_Gallery_Item_Second.style.width = "15%";
    Third_Gallery_Item_Third.style.width = "15%";
    Third_Gallery_Item_Forth.style.width = "15%";
    Third_Gallery_Item_Fifth.style.width = "15%";
}
function  Third_Second_Over_S1130(){
    Third_Gallery_Item_First.style.width = "15%";
    Third_Gallery_Item_Second.style.width = "100%";
    Third_Gallery_Item_Third.style.width = "15%";
    Third_Gallery_Item_Forth.style.width = "15%";
    Third_Gallery_Item_Fifth.style.width = "15%";
}
function  Third_Third_Over_S1130(){
    Third_Gallery_Item_First.style.width = "15%";
    Third_Gallery_Item_Second.style.width = "15%";
    Third_Gallery_Item_Third.style.width = "100%";
    Third_Gallery_Item_Forth.style.width = "15%";
    Third_Gallery_Item_Fifth.style.width = "15%";
}
function  Third_Forth_Over_S1130(){
    Third_Gallery_Item_First.style.width = "15%";
    Third_Gallery_Item_Second.style.width = "15%";
    Third_Gallery_Item_Third.style.width = "15%";
    Third_Gallery_Item_Forth.style.width = "100%";
    Third_Gallery_Item_Fifth.style.width = "15%";
}
function  Third_Fifth_Over_S1130(){
    Third_Gallery_Item_First.style.width = "15%";
    Third_Gallery_Item_Second.style.width = "15%";
    Third_Gallery_Item_Third.style.width = "15%";
    Third_Gallery_Item_Forth.style.width = "15%";
    Third_Gallery_Item_Fifth.style.width = "100%";
}
function Init_All_Item_Gallery_Holder_S1130(){
    Gallery_Item_First.style.display = "flex";
    Gallery_Item_First.style.margin = "auto";
    Gallery_Item_Second.style.display = "flex";
    Gallery_Item_Second.style.margin = "auto";
    Gallery_Item_Third.style.display = "flex";
    Gallery_Item_Third.style.margin = "auto";
    Gallery_Item_Forth.style.display = "flex";
    Gallery_Item_Forth.style.margin = "auto";
    Gallery_Item_Fifth.style.display = "flex";
    Gallery_Item_Fifth.style.margin = "auto"; 
    Second_Gallery_Item_First.style.display = "flex"; 
    Second_Gallery_Item_First.style.margin = "auto"; 
    Second_Gallery_Item_Second.style.display = "flex";
    Second_Gallery_Item_Second.style.margin = "auto";
    Second_Gallery_Item_Third.style.display = "flex";
    Second_Gallery_Item_Third.style.margin = "auto";
    Second_Gallery_Item_Forth.style.display = "flex";
    Second_Gallery_Item_Forth.style.margin = "auto";
    Second_Gallery_Item_Fifth.style.display = "flex";
    Second_Gallery_Item_Fifth.style.margin = "auto"; 
    Third_Gallery_Item_First.style.display = "flex";
    Third_Gallery_Item_First.style.margin = "auto";
    Third_Gallery_Item_Second.style.display = "flex";
    Third_Gallery_Item_Second.style.margin = "auto"; 
    Third_Gallery_Item_Third.style.display = "flex";
    Third_Gallery_Item_Third.style.margin = "auto";
    Third_Gallery_Item_Forth.style.display = "flex"; 
    Third_Gallery_Item_Forth.style.margin = "auto"; 
    Third_Gallery_Item_Fifth.style.display = "flex";
    Third_Gallery_Item_Fifth.style.margin = "auto";
}
/*Photography_S800()*/
function Photography_S800(){
    Gallery_Item_First.onmouseover = First_First_Over_S800;
    Gallery_Item_Second.onmouseover = First_Second_Over_S800;
    Gallery_Item_Third.onmouseover = First_Third_Over_S800;
    Gallery_Item_Forth.onmouseover = First_Forth_Over_S800;
    Gallery_Item_Fifth.onmouseover = First_Fifth_Over_S800;
    Second_Gallery_Item_First.onmouseover = Second_First_Over_S800;
    Second_Gallery_Item_Second.onmouseover = Second_Second_Over_S800;
    Second_Gallery_Item_Third.onmouseover = Second_Third_Over_S800;
    Second_Gallery_Item_Forth.onmouseover = Second_Forth_Over_S800;
    Second_Gallery_Item_Fifth.onmouseover = Second_Fifth_Over_S800;
    Third_Gallery_Item_First.onmouseover = Third_First_Over_S800;
    Third_Gallery_Item_Second.onmouseover = Third_Second_Over_S800;
    Third_Gallery_Item_Third.onmouseover = Third_Third_Over_S800;
    Third_Gallery_Item_Forth.onmouseover = Third_Forth_Over_S800;
    Third_Gallery_Item_Fifth.onmouseover = Third_Fifth_Over_S800;
    Init_All_Item_Gallery_Holder_S1130();
}
function First_First_Over_S800(){
    Gallery_Item_First.style.width = "350%";
    Gallery_Item_Second.style.width = "15%";
    Gallery_Item_Third.style.width = "15%";
    Gallery_Item_Forth.style.width = "15%";
    Gallery_Item_Fifth.style.width = "15%";
}
function First_Second_Over_S800(){
    Gallery_Item_First.style.width = "15%";
    Gallery_Item_Second.style.width = "350%";
    Gallery_Item_Third.style.width = "15%";
    Gallery_Item_Forth.style.width = "15%";
    Gallery_Item_Fifth.style.width = "15%";
}
function First_Third_Over_S800(){
    Gallery_Item_First.style.width = "15%";
    Gallery_Item_Second.style.width = "15%";
    Gallery_Item_Third.style.width = "350%";
    Gallery_Item_Forth.style.width = "15%";
    Gallery_Item_Fifth.style.width = "15%";
}
function First_Forth_Over_S800(){
    Gallery_Item_First.style.width = "15%";
    Gallery_Item_Second.style.width = "15%";
    Gallery_Item_Third.style.width = "15%";
    Gallery_Item_Forth.style.width = "350%";
    Gallery_Item_Fifth.style.width = "15%";
}
function First_Fifth_Over_S800(){
    Gallery_Item_First.style.width = "15%";
    Gallery_Item_Second.style.width = "15%";
    Gallery_Item_Third.style.width = "15%";
    Gallery_Item_Forth.style.width = "15%";
    Gallery_Item_Fifth.style.width = "350%";
}
function  Second_First_Over_S800(){
    Second_Gallery_Item_First.style.width = "350%";
    Second_Gallery_Item_Second.style.width = "15%";
    Second_Gallery_Item_Third.style.width = "15%";
    Second_Gallery_Item_Forth.style.width = "15%";
    Second_Gallery_Item_Fifth.style.width = "15%";
}
function  Second_Second_Over_S800(){
    Second_Gallery_Item_First.style.width = "15%";
    Second_Gallery_Item_Second.style.width = "350%";
    Second_Gallery_Item_Third.style.width = "15%";
    Second_Gallery_Item_Forth.style.width = "15%";
    Second_Gallery_Item_Fifth.style.width = "15%";
}
function  Second_Third_Over_S800(){
    Second_Gallery_Item_First.style.width = "15%";
    Second_Gallery_Item_Second.style.width = "15%";
    Second_Gallery_Item_Third.style.width = "350%";
    Second_Gallery_Item_Forth.style.width = "15%";
    Second_Gallery_Item_Fifth.style.width = "15%";
}
function  Second_Forth_Over_S800(){
    Second_Gallery_Item_First.style.width = "15%";
    Second_Gallery_Item_Second.style.width = "15%";
    Second_Gallery_Item_Third.style.width = "15%";
    Second_Gallery_Item_Forth.style.width = "350%";
    Second_Gallery_Item_Fifth.style.width = "15%";
}
function  Second_Fifth_Over_S800(){
    Second_Gallery_Item_First.style.width = "15%";
    Second_Gallery_Item_Second.style.width = "15%";
    Second_Gallery_Item_Third.style.width = "15%";
    Second_Gallery_Item_Forth.style.width = "15%";
    Second_Gallery_Item_Fifth.style.width = "350%";
}
function  Third_First_Over_S800(){
    Third_Gallery_Item_First.style.width = "350%";
    Third_Gallery_Item_Second.style.width = "15%";
    Third_Gallery_Item_Third.style.width = "15%";
    Third_Gallery_Item_Forth.style.width = "15%";
    Third_Gallery_Item_Fifth.style.width = "15%";
}
function  Third_Second_Over_S800(){
    Third_Gallery_Item_First.style.width = "15%";
    Third_Gallery_Item_Second.style.width = "350%";
    Third_Gallery_Item_Third.style.width = "15%";
    Third_Gallery_Item_Forth.style.width = "15%";
    Third_Gallery_Item_Fifth.style.width = "15%";
}
function  Third_Third_Over_S800(){
    Third_Gallery_Item_First.style.width = "15%";
    Third_Gallery_Item_Second.style.width = "15%";
    Third_Gallery_Item_Third.style.width = "350%";
    Third_Gallery_Item_Forth.style.width = "15%";
    Third_Gallery_Item_Fifth.style.width = "15%";
}
function  Third_Forth_Over_S800(){
    Third_Gallery_Item_First.style.width = "15%";
    Third_Gallery_Item_Second.style.width = "15%";
    Third_Gallery_Item_Third.style.width = "15%";
    Third_Gallery_Item_Forth.style.width = "350%";
    Third_Gallery_Item_Fifth.style.width = "15%";
}
function  Third_Fifth_Over_S800(){
    Third_Gallery_Item_First.style.width = "15%";
    Third_Gallery_Item_Second.style.width = "15%";
    Third_Gallery_Item_Third.style.width = "15%";
    Third_Gallery_Item_Forth.style.width = "15%";
    Third_Gallery_Item_Fifth.style.width = "350%";
}
/*Codes_B1460()*/ 
function Codes_B1460()
{
    Third_Codes_Main_Desc.style.textAlign = "left";
    Second_Codes_Main_Desc.style.textAlign = "left";
    Codes_Main_Desc.style.textAlign = "left";
    Photography_Holder.style.display = "none";
    Codes_Holder.style.display = "none";
    Gallery_Codes_Holder.style.display = "block";
    Gallery_Codes_Holder.style.padding = "30px";
    Work_Codes_Title.style.textAlign ="center";
    First_Code_Title.style.textAlign = "center";
    /**/
    Main_Image.style.display = "flex";
    Second_Main_Image.style.display = "flex";
    Third_Main_Image.style.display = "flex";
    First_Code_Title.style.paddingTop = "30px";
    First_Code_Title.style.paddingBottom = "10px";
    First_Code.style.position = "relative";
    First_Code.style.display = "block";
    First_Code.style.backgroundColor = "#dcefef";
    Upper_Code.style.display = "flex";
    Upper_Code.style.position="relative";
    Upper_Code.style.width = "100%";
    Upper_Code.style.padding = "15px";
    Main_Image.style.margin = "auto";
    Main_Image.style.position = "relative";
    Main_Image.style.transform = "scale(1.0)";
    Main_Image.style.width = "auto";
    Codes_Main_Desc.style.width = "fit-content";
    Codes_Main_Desc.style.position = "relative";
    Codes_Main_Desc.style.display = "block";
    Codes_Main_Desc.style.margin = "auto";
    Codes_Main_Desc.style.fontSize = "24px";
    Codes_Main_Desc.style.padding = "0px";
    First_Codes_Main_Desc_P.style.fontSize = "18px";
    Lower_Code.style.display = "flex";
    Lower_Code.style.position = "relative";
    Lower_Code.style.padding = "15px";
    First_Codes_Image.style.display = "flex";
    First_Codes_Image.style.margin = "auto";
    First_Codes_Image.style.position = "relative";
    First_Codes_Image.style.transform = "scale(1)";
    First_Codes_Image.style.width = "auto";
    Second_Codes_Image.style.display = "flex";
    Second_Codes_Image.style.margin = "auto";
    Second_Codes_Image.style.position = "relative";
    Second_Codes_Image.style.transform = "scale(1.0)";
    Second_Codes_Image.style.width = "auto";
    Third_Codes_Image.style.display = "flex";
    Third_Codes_Image.style.margin = "auto";
    Third_Codes_Image.style.position = "relative";
    Third_Codes_Image.style.transform = "scale(1.0)";
    Third_Codes_Image.style.width = "auto";
    Second_Code_Title.style.paddingTop = "30px";
    Second_Code_Title.style.paddingBottom = "10px";
    Second_Code_Title.style.width = "100%";
    Second_Code_Title.style.textAlign= "center";
    Second_Code.style.position = "relative";
    Second_Code.style.display = "block";
    Second_Code.style.backgroundColor = "#F0F5F0";
    Second_Upper_Code.style.display = "flex";
    Second_Upper_Code.style.position="relative";
    Second_Upper_Code.style.width = "100%";
    Second_Upper_Code.style.padding = "15px";
    Second_Main_Image.style.margin = "auto";
    Second_Main_Image.style.position = "relative";
    Second_Main_Image.style.transform = "scale(1.0)";
    Second_Main_Image.style.width = "auto";
    Second_Codes_Main_Desc.style.width = "fit-content";
    Second_Codes_Main_Desc.style.position = "relative";
    Second_Codes_Main_Desc.style.display = "block";
    Second_Codes_Main_Desc.style.margin = "auto";
    Second_Codes_Main_Desc.style.fontSize = "24px";
    Second_Codes_Main_Desc_P.style.fontSize = "18px";
    Second_Codes_Main_Desc.style.padding = "0px";
    Second_Lower_Code.style.display = "flex";
    Second_Lower_Code.style.position = "relative";
    Second_Lower_Code.style.padding = "15px";
    Second_First_Codes_Image.style.display = "flex";
    Second_First_Codes_Image.style.margin = "auto";
    Second_First_Codes_Image.style.position = "relative";
    Second_First_Codes_Image.style.transform = "scale(1.0)";
    Second_First_Codes_Image.style.width = "auto";
    Second_Second_Codes_Image.style.display = "flex";
    Second_Second_Codes_Image.style.margin = "auto";
    Second_Second_Codes_Image.style.position = "relative";
    Second_Second_Codes_Image.style.transform = "scale(1.0)";
    Second_Second_Codes_Image.style.width = "auto";
    Second_Third_Codes_Image.style.display = "flex";
    Second_Third_Codes_Image.style.margin = "auto";
    Second_Third_Codes_Image.style.position = "relative";
    Second_Third_Codes_Image.style.transform = "scale(1.0)";
    Second_Third_Codes_Image.style.width = "auto";
    /**/
    Third_Code_Title.style.paddingTop = "30px";
    Third_Code_Title.style.paddingBottom = "10px";
    Third_Code_Title.style.width = "100%";
    Third_Code_Title.style.textAlign= "center";
    Third_Code.style.position = "relative";
    Third_Code.style.display = "block";
    Third_Code.style.backgroundColor = "#F0F5F0";
    Third_Upper_Code.style.display = "flex";
    Third_Upper_Code.style.position="relative";
    Third_Upper_Code.style.width = "100%";
    Third_Upper_Code.style.padding = "15px";
    Third_Main_Image.style.margin = "auto";
    Third_Main_Image.style.position = "relative";
    Third_Main_Image.style.transform = "scale(1)";
    Third_Main_Image.style.width = "auto";
    Third_Codes_Main_Desc.style.width = "fit-content";
    Third_Codes_Main_Desc.style.position = "relative";
    Third_Codes_Main_Desc.style.display = "block";
    Third_Codes_Main_Desc.style.margin = "auto";
    Third_Codes_Main_Desc.style.fontSize = "24px";
    Third_Codes_Main_Desc_P.style.fontSize = "18px";
    Third_Codes_Main_Desc.style.padding = "0px";
    Third_Lower_Code.style.display = "flex";
    Third_Lower_Code.style.position = "relative";
    Third_Lower_Code.style.padding = "15px";
    Third_First_Codes_Image.style.display = "flex";
    Third_First_Codes_Image.style.margin = "auto";
    Third_First_Codes_Image.style.position = "relative";
    Third_First_Codes_Image.style.transform = "scale(1.0)";
    Third_First_Codes_Image.style.width = "auto";
    Third_Second_Codes_Image.style.display = "flex";
    Third_Second_Codes_Image.style.margin = "auto";
    Third_Second_Codes_Image.style.position = "relative";
    Third_Second_Codes_Image.style.transform = "scale(1.0)";
    Third_Second_Codes_Image.style.width = "auto";
    onWork = 2;
    Floppy_Disk_S1177();
}
/*Codes_S1460()*/ 
function Codes_S1460_B1000(){
    Third_Codes_Main_Desc.style.textAlign = "left";
    Second_Codes_Main_Desc.style.textAlign = "left";
    Codes_Main_Desc.style.textAlign = "left";
    Photography_Holder.style.display = "none";
    Codes_Holder.style.display = "none";
    Gallery_Codes_Holder.style.display = "block";
    Gallery_Codes_Holder.style.padding = "30px";
    Work_Codes_Title.style.textAlign ="center";
    First_Code_Title.style.textAlign = "center";
    /**/
    First_Code_Title.style.paddingTop = "30px";
    First_Code_Title.style.paddingBottom = "10px";
    First_Code.style.position = "relative";
    First_Code.style.display = "block";
    First_Code.style.backgroundColor = "#dcefef";
    Upper_Code.style.display = "flex";
    Upper_Code.style.position="relative";
    Upper_Code.style.width = "100%";
    Upper_Code.style.padding = "15px";
    Main_Image.style.margin = "auto";
    Main_Image.style.position = "relative";
    Main_Image.style.transform = "scale(0.7)";
    Main_Image.style.width = "80%";
    Main_Image.style.display = "flex";
    Second_Main_Image.style.display = "flex";
    Third_Main_Image.style.display = "flex";
    Codes_Main_Desc.style.width = "fit-content";
    Codes_Main_Desc.style.position = "relative";
    Codes_Main_Desc.style.display = "block";
    Codes_Main_Desc.style.margin = "auto";
    Codes_Main_Desc.style.fontSize = "24px";
    Codes_Main_Desc.style.padding = "30px";
    First_Codes_Main_Desc_P.style.fontSize = "18px";
    Lower_Code.style.display = "flex";
    Lower_Code.style.position = "relative";
    Lower_Code.style.padding = "15px";
    First_Codes_Image.style.display = "flex";
    First_Codes_Image.style.margin = "auto";
    First_Codes_Image.style.position = "relative";
    First_Codes_Image.style.transform = "scale(0.7)";
    First_Codes_Image.style.width = "30%";
    Second_Codes_Image.style.display = "flex";
    Second_Codes_Image.style.margin = "auto";
    Second_Codes_Image.style.position = "relative";
    Second_Codes_Image.style.transform = "scale(0.7)";
    Second_Codes_Image.style.width = "30%";
    Third_Codes_Image.style.display = "flex";
    Third_Codes_Image.style.margin = "auto";
    Third_Codes_Image.style.position = "relative";
    Third_Codes_Image.style.transform = "scale(0.7)";
    Third_Codes_Image.style.width = "30%";
    Second_Code_Title.style.paddingTop = "30px";
    Second_Code_Title.style.paddingBottom = "10px";
    Second_Code_Title.style.width = "100%";
    Second_Code_Title.style.textAlign= "center";
    Second_Code.style.position = "relative";
    Second_Code.style.display = "block";
    Second_Code.style.backgroundColor = "#F0F5F0";
    Second_Upper_Code.style.display = "flex";
    Second_Upper_Code.style.position="relative";
    Second_Upper_Code.style.width = "100%";
    Second_Upper_Code.style.padding = "15px";
    Second_Main_Image.style.margin = "auto";
    Second_Main_Image.style.position = "relative";
    Second_Main_Image.style.transform = "scale(0.7)";
    Second_Main_Image.style.width = "80%";
    Second_Codes_Main_Desc.style.width = "fit-content";
    Second_Codes_Main_Desc.style.position = "relative";
    Second_Codes_Main_Desc.style.display = "block";
    Second_Codes_Main_Desc.style.margin = "auto";
    Second_Codes_Main_Desc.style.fontSize = "24px";
    Second_Codes_Main_Desc.style.padding = "30px";
    Second_Codes_Main_Desc_P.style.fontSize = "18px";
    Second_Lower_Code.style.display = "flex";
    Second_Lower_Code.style.position = "relative";
    Second_Lower_Code.style.padding = "15px";
    Second_First_Codes_Image.style.display = "flex";
    Second_First_Codes_Image.style.margin = "auto";
    Second_First_Codes_Image.style.position = "relative";
    Second_First_Codes_Image.style.transform = "scale(0.7)";
    Second_First_Codes_Image.style.width = "30%";
    Second_Second_Codes_Image.style.display = "flex";
    Second_Second_Codes_Image.style.margin = "auto";
    Second_Second_Codes_Image.style.position = "relative";
    Second_Second_Codes_Image.style.transform = "scale(0.7)";
    Second_Second_Codes_Image.style.width = "30%";
    Second_Third_Codes_Image.style.display = "flex";
    Second_Third_Codes_Image.style.margin = "auto";
    Second_Third_Codes_Image.style.position = "relative";
    Second_Third_Codes_Image.style.transform = "scale(0.7)";
    Second_Third_Codes_Image.style.width = "30%";
    /**/
    Third_Code_Title.style.paddingTop = "30px";
    Third_Code_Title.style.paddingBottom = "10px";
    Third_Code_Title.style.width = "100%";
    Third_Code_Title.style.textAlign= "center";
    Third_Code.style.position = "relative";
    Third_Code.style.display = "block";
    Third_Code.style.backgroundColor = "#F0F5F0";
    Third_Upper_Code.style.display = "flex";
    Third_Upper_Code.style.position="relative";
    Third_Upper_Code.style.width = "100%";
    Third_Upper_Code.style.padding = "15px";
    Third_Main_Image.style.margin = "auto";
    Third_Main_Image.style.position = "relative";
    Third_Main_Image.style.width = "80%";
    Third_Main_Image.style.transform = "scale(1)";
    Third_Codes_Main_Desc.style.width = "fit-content";
    Third_Codes_Main_Desc.style.position = "relative";
    Third_Codes_Main_Desc.style.display = "block";
    Third_Codes_Main_Desc.style.margin = "auto";
    Third_Codes_Main_Desc.style.fontSize = "24px";
    Third_Codes_Main_Desc.style.padding = "30px";
    Third_Codes_Main_Desc_P.style.fontSize = "18px";
    Third_Lower_Code.style.display = "flex";
    Third_Lower_Code.style.position = "relative";
    Third_Lower_Code.style.padding = "15px";
    Third_First_Codes_Image.style.display = "flex";
    Third_First_Codes_Image.style.margin = "auto";
    Third_First_Codes_Image.style.position = "relative";
    Third_First_Codes_Image.style.transform = "scale(0.7)";
    Third_First_Codes_Image.style.width = "50%";
    Third_Second_Codes_Image.style.display = "flex";
    Third_Second_Codes_Image.style.margin = "auto";
    Third_Second_Codes_Image.style.position = "relative";
    Third_Second_Codes_Image.style.transform = "scale(0.7)";
    Third_Second_Codes_Image.style.width = "50%";
    Floppy_Disk_S1177();
}
function Codes_S1000(){
    Codes_S1460_B1000();
    Upper_Code.style.display = "block";
    Second_Upper_Code.style.display = "block";
    Third_Upper_Code.style.display = "block";
    Third_Codes_Main_Desc.style.textAlign = "center";
    Second_Codes_Main_Desc.style.textAlign = "center";
    Codes_Main_Desc.style.textAlign = "center";
    Codes_Main_Desc.style.padding = "0px";
    Second_Codes_Main_Desc.style.padding = "0px";
    Third_Codes_Main_Desc.style.padding = "0px";
    Codes_Main_Desc.style.width = "inherit";
    Second_Codes_Main_Desc.style.width = "inherit";
    Third_Codes_Main_Desc.style.width = "inherit";
    Upper_Code.style.padding = "0px";
    First_Codes_Main_Desc_P.style.fontSize = "16px";
    Second_Codes_Main_Desc_P.style.fontSize = "16px";
    Third_Codes_Main_Desc_P.style.fontSize = "16px";
    Work_Nav_Item_S1040();
}
/*Hover Out*/
function Cloud_About_Out()
{

    Cloud_About.style.transform = "scale(1)";
}
function Cloud_Work_Out()
{
    Cloud_Work.style.transform = "scale(1)";
}
function Cloud_Contact_Out()
{
    Cloud_Contact.style.transform = "scale(1)";
}
function Floppy_Disk_Line_Out()
{
    Floppy_Disk_Line.style.transform = "scale(1)";
}
function Title_Out()
{
    Title.style.transform = "scale(1)";
}
function My_Belife_Out()
{
    My_belief.style.transform = "scale(1)";
}
function Welcome_Out(){
    Welcome.style.transform = "scale(1)";
}
function HomeScreen_Hide_Elements(){
    Floppy_Disk.style.display = "none";
    Profile.style.display = "none";
    Nav_Holder.style.display = "none";
    Education_Holder.style.display = "none";
    Form_Holder.style.display = "none";
    Work_Holder.style.display = "none";
    Gallery_Photos_Holder.style.display = "none";
    Gallery_Codes_Holder.style.display = "none";
    onWork = 0;
}
function About_Out(){
    if(ScreenFlag !=1){
        About.style.backgroundColor = "white";
        About.style.color = "#133337"
    }
}
function Work_Out(){
    if (ScreenFlag != 2){
        Work.style.backgroundColor = "white";
        Work.style.color = "#133337";
    }
}
function Contact_Out(){
    if (ScreenFlag != 3){
        Contact.style.backgroundColor = "white";
        Contact.style.color = "#133337";
    }
}
function Floppy_Disk_Out()
{
    Floppy_Disk.style.transform = "scale(1)";
}
function Codes_Image_Thumb_Out(){
    Codes_Image_Thumb.style.transform = "scale(1)";
}
function Photography_Image_Thumb_Out(){
    Photography_Image_Thumb.style.transform = "scale(1)";
}
function BackButton_Out(){
    BackButton[0].style.transform = "scale(1)";
    BackButton[1].style.transform = "scale(1)";
}
/*Click*/
function Cloud_About_Click(){
        Hide_Home_Screen();
        ScreenFlag = 1;
        LoadScreens();
}
function Floppy_Disk_Click()
{
    switch(ScreenFlag)
    {
        case 1:
            About.style.background = "none";
            About.style.color = "#191f22";
            ScreenFlag = 0;
            HomeScreen_Hide_Elements();
            LoadScreens();
            break;
        case 2:
            Work.style.background = "none";
            Work.style.color = "#191f22";
            HomeScreen_Hide_Elements();
            ScreenFlag = 0;
            onWork =0;
            LoadScreens();
            break;
        case 3:
            Contact.style.background = "none";
            Contact.style.color = "#191f22";
            HomeScreen_Hide_Elements();
            ScreenFlag =0;
            LoadScreens();
            break;
    }
}
function Cloud_Contact_Click(){
    My_belief.style.display = "none";
    ScreenFlag = 3;
    Hide_Home_Screen();
    LoadScreens();
}
function Cloud_Work_Click(){
    My_belief.style.display = "none";
    ScreenFlag = 2;
    Hide_Home_Screen();
    LoadScreens();
}
function Photography_Image_Click(){
    Photography_Holder.style.display = "none";
    Codes_Holder.style.display = "none";
    Gallery_Photos_Holder.style.display = "block";
    Gallery_Photos_Holder.style.position = "relative";
    Gallery_Photos_Holder.style.widh = "fit-content";
    Gallery_Photos_Holder.style.paddingLeft = "10px";
    Gallery_Photos_Holder.style.paddingRight = "10px";
    Gallery_Photos_Holder.style.transition = "all 0.5s";
    First_Gallery.style.display = "flex";
    First_Gallery_Title.style.textAlign = "center";
    First_Gallery_Title.style.paddingBottom = "20px"; 
    First_Gallery_Title.style.paddingTop = "30px";
    /**/
    Second_Gallery.style.display = "flex";
    Second_Gallery_Title.style.textAlign = "center";
    Second_Gallery_Title.style.paddingBottom = "20px"; 
    Second_Gallery_Title.style.paddingTop = "30px";
    /**/
    Third_Gallery.style.display = "flex";
    Third_Gallery_Title.style.textAlign = "center";
    Third_Gallery_Title.style.paddingBottom = "20px";
    Third_Gallery_Title.style.paddingTop = "30px";
    onWork = 1;
    Floppy_Disk_S1177();
}
function Codes_Image_Thumb_Click(){
    var w = window.innerWidth;
    if(w>1460){
        Codes_B1460();
        Floppy_Disk_B1177();
        Nav_Holder_B1177();
    }else if(w<1460 && w>1150)
    {
        Codes_S1460_B1000();
        Floppy_Disk_S1177();
        Nav_Holder_B1177();
    }else if(w<1150){
        Resize_Nav_Holder_S_1177();
        Floppy_Disk_S1177();
        Codes_S1000();
    }
  onWork =2;
}
function BackButton_Click(){
    if(onWork == 1){
        Gallery_Photos_Holder.style.display = "none";
        onWork = 0;
        BackButton[0].style.transform = "scale(1)";
        LoadScreens();
    }else if(onWork == 2){
        Gallery_Codes_Holder.style.display = "none";
        onWork = 0;
        BackButton[1].style.transform = "scale(1)";
        LoadScreens();
    }
}
function About_Click(){
    Work.style.background = "none";
    Work.style.color = "#191f22";
    Contact.style.background = "none";
    Contact.style.color = "#191f22";
    ScreenFlag = 1;
    HomeScreen_Hide_Elements();
    LoadScreens();
}
function Work_Click(){
    About.style.background = "none";
    About.style.color = "#191f22";
    Contact.style.background = "none";
    Contact.style.color = "#191f22";
    ScreenFlag = 2;
    HomeScreen_Hide_Elements();
    LoadScreens();
}
function Contact_Click(){
    My_belief.style.display = "none";
    About.style.background = "none";
    About.style.color = "#191f22";
    Work.style.background = "none";
    Work.style.color = "#191f22";
    ScreenFlag = 3;
    HomeScreen_Hide_Elements();
    LoadScreens();
}
/* Init home Screen B1430*/
function Loading_Home_Page_B1430()
{
     Header_Holder_B1430();
     Cloud_About_B1430();
     Title_B1430();
     Floppy_Disk_Line_B1430();
     My_Belife_B1430();
     Cloud_Work_B1430();
     Cloud_Contact_B1430();
     Welcome_B1430();
     element_B1430();
     HomeScreen_Hide_Elements();
     
}
function Header_Holder_B1430()
{
    Header_Holder.style.background = "none";
    Header_Holder.style.display = "flex";
    Header_Holder.style.position = "relative";
    Header_Holder.style.width = "100%";
    Header_Holder.style.height = "585px";
    Header_Holder.style.transition = "all  0.7s";
}

function Cloud_About_B1430()
{
    Cloud_About.style.width = "208px";
    Cloud_About.style.height = "418px";
    Cloud_About.style.position = "relative";
    Cloud_About.style.float = "left";
    Cloud_About.style.left = "2%";
    Cloud_About.style.display = "block";
    Cloud_About.style.transition = "all 0.3s";

}
function Title_B1430()
{
    Title.style.left = "0%";
    Title.style.width = "fit-content";
    Title.style.position = "relative";
    Title.style.fontSize = "20px";
    Title.style.position = "relative";
    Title.style.transition =  "all 0.7s";
    Title.style.animation = "normal";
    Title.style.float = "left";
    Title.style.textAlign = "left";
    Title.style.color = "black";
    Title.style.paddingTop = "0px";
    Title.style.top = "0px";
}
function Floppy_Disk_Line_B1430()
{
    Floppy_Disk_Line.style.position = "relative";
    Floppy_Disk_Line.style.width = "300px";
    Floppy_Disk_Line.style.height = "500px";
    Floppy_Disk_Line.style.float = "left";
    Floppy_Disk_Line.style.transition = "all 0.5s";
    Floppy_Disk_Line.style.left = "0%";
    Floppy_Disk_Line.style.display = "block";
}
function My_Belife_B1430()
{
    My_belief.style.display = "block";
    My_belief.style.position = "relative";
    My_belief.style.fontSize = "18px";
    My_belief.style.width = "fit-content";
    My_belief.style.float = "left";
    My_belief.style.transition = "all 0.7s";
    My_belief.style.animation = "normal";
    My_belief.style.left = "0%";
    My_belief.style.color = "black";
    My_belief.style.paddingTop = "0px";
    My_belief.style.textAlign = "left";
    My_belief.style.color = "black";
    My_belief.style.paddingTop = "0px";
    My_belief.style.top = "0px";
    My_belief.innerHTML = "<b>my agenda is to develop:</b><br> clean and efficient code<br> that functions with precision.<br> I am committed to creating designs<br> that are not only aesthetically<br> pleasing, but also punctual in their delivery.<br>I am committed to offering top-notch.";

}

function Cloud_Work_B1430()
{
    Cloud_About.style.display = "block";
    Cloud_Work.style.position = "relative";
    Cloud_Work.style.float = "left";
    Cloud_Work.style.transition = "all 0.3s";
    Cloud_Work.style.left = "-5%";
    Cloud_Work.style.width = "190px";
    Cloud_Work.style.height = "510px";
    Cloud_Work.style.display = "block";
}

function Cloud_Contact_B1430()
{
    Cloud_Contact.style.left = "0%";
    Cloud_Contact.style.display = "block";
    Cloud_Contact.style.position = "relative";
    Cloud_Contact.style.float = "left";
    Cloud_Contact.style.transition = "all 0.3s";
    Cloud_Contact.style.width = "186px";
    Cloud_Contact.style.height = "478px";
    Cloud_Contact.style.display = "block";
}
function Welcome_B1430()
{
    Welcome.style.top = "0px";
    Welcome.style.display = "block";
    Welcome.style.color = "#FFFFFF";
    Welcome.style.position = "relative";
    Welcome.style.width = "fit-content";
    Welcome.style.fontSize = "18px";
    Welcome.style.left = "3%";
    Welcome.style.transition = "all 0.7s";
    Welcome.style.animation = "normal";
    Welcome.style.textAlign = "left";
    Welcome.style.paddingTop = "0px";
    Welcome.innerHTML = "<b>Welcome</b> dear visitor, I invite you to my creation, please enjoy your visit in my site.<br>Feel free to reach out if anything comes to your mind.<br>Dean";
}
function element_B1430(){
    element.style.display = "inline-block";
    element.style.position = "absolute";
    element.style.top = "25%";
    element.style.height = "70%";
    element.style.width = "100%";
    element.style.left  = "0%";
    element.style.background = "#133337";
    element.style.clipPath = "polygon(0% 0%,100% 100%, 100% 100%, 0% 100%)";
    element.style.boxSizing = "border-box";
    element.style.transition = "all 0.7s";
    element.style.zIndex = "-1";
}
/* Init home Screen small 1430 && big 1389 */
function Loading_Home_Page_S1430_B1389()
{
    Header_Holder_S1430_B1389();
    Cloud_About_S1430_B1389();
    Title_S1430_B1389();
    Floppy_Disk_Line_S1430_B1389();
    My_Belife_S1430_B1389();
    Cloud_Work_S1430_B1389();
    Cloud_Contact_S1430_B1389();
    Welcome_S1430_B1389();
    element_S1430_B1389();
    HomeScreen_Hide_Elements();
}
function Header_Holder_S1430_B1389()
{
    Header_Holder.style.background = "none";
    Header_Holder.style.display = "flex";
    Header_Holder.style.position = "relative";
    Header_Holder.style.width = "100%";
    Header_Holder.style.height = "585px";
    Header_Holder.style.transition = "all  0.7s";
}
function Cloud_About_S1430_B1389()
{
    Cloud_About.style.position = "relative";
    Cloud_About.style.float = "left";
    Cloud_About.style.transition = "0.3";
    Cloud_About.style.left = "2%";
    Cloud_About.style.display = "block";
    Cloud_About.style.transition = "all 0.3s";
}
function Title_S1430_B1389()
{
    Title.style.left = "-2%";
    Title.style.width = "fit-content";
    Title.style.position = "relative";
    Title.style.fontSize = "20px";
    Title.style.position = "relative";
    Title.style.transition =  "all 0.7s";
    Title.style.animation = "normal";
    Title.style.float = "left";
    Title.style.textAlign = "left";
    Title.style.color = "black";
    Title.style.paddingTop = "0px";
    Title.style.paddingTop = "0px";
    Title.style.top = "0px";

}
function Floppy_Disk_Line_S1430_B1389()
{
    Floppy_Disk_Line.style.position = "relative";
    Floppy_Disk_Line.style.width = "300px";
    Floppy_Disk_Line.style.height = "500px";
    Floppy_Disk_Line.style.float = "left";
    Floppy_Disk_Line.style.transition = "all 0.5s";
    Floppy_Disk_Line.style.left = "-5%";
    Floppy_Disk_Line.style.display = "block";
}

function My_Belife_S1430_B1389()
{
    My_belief.style.margin = "none";
    My_belief.style.left = "-10%";
    My_belief.style.position = "relative";
    My_belief.style.fontSize = "18px";
    My_belief.style.width = "fit-content";
    My_belief.style.float = "left";
    My_belief.style.transition = "all 0.7s";
    My_belief.style.animation = "normal";
    My_belief.style.textAlign = "left";
    My_belief.style.color = "black";
    My_belief.style.paddingTop = "0px";
    My_belief.style.top = "0px";
    My_belief.style.display = "block";
    My_belief.innerHTML = "<b>my agenda is to develop:</b><br> clean and efficient code<br> that functions with precision.<br> I am committed to creating designs<br> that are not only aesthetically<br> pleasing, but also punctual in their delivery.<br>I am committed to offering top-notch.";
}
function  Cloud_Work_S1430_B1389()
{
    Cloud_Work.style.width = "190px";
    Cloud_Work.style.height = "510px";
    Cloud_Work.style.left = "-15%";
    Cloud_Work.style.position = "relative";
    Cloud_Work.style.float = "left";
    Cloud_Work.style.transition = "all 0.3s";
    Cloud_Work.style.display = "block";
}

function Cloud_Contact_S1430_B1389()
{
    Cloud_Contact.style.width = "186px";
    Cloud_Contact.style.height = "408px";
    Cloud_Contact.style.left = "-10%";
    Cloud_Contact.style.position = "relative";
    Cloud_Contact.style.float = "left";
    Cloud_Contact.style.transition = "all 0.3s";
    Cloud_Contact.style.display = "block";
}
function Welcome_S1430_B1389()
{
    Welcome.style.top = "0px";
    Welcome.style.display = "block";
    Welcome.style.color = "#FFFFFF";
    Welcome.style.position = "relative";
    Welcome.style.width = "fit-content";
    Welcome.style.fontSize = "18px";
    Welcome.style.left = "3%";
    Welcome.style.transition = "all 0.7s";
    Welcome.style.animation = "normal";
    Welcome.style.textAlign = "left";
    Welcome.style.paddingTop = "0px";
    Welcome.innerHTML = "<b>Welcome</b> dear visitor, I invite you to my <br>creation, please enjoy your visit in my site.<br>Feel free to reach out if anything comes to your mind.<br>Dean";
}
function element_S1430_B1389()
{
    element.style.display = "inline-block";
    element.style.position = "absolute";
    element.style.top = "25%";
    element.style.height = "65%";
    element.style.width = "100%";
    element.style.left  = "0%";
    element.style.background = "#133337";
    element.style.clipPath = "polygon(0% 0%,100% 100%, 100% 100%, 0% 100%)";
    element.style.boxSizing = "border-box";
    element.style.transition = "all 0.7s";
    element.style.zIndex = "-1";
}
/* Init home Screen small 1389 && bigg 1177 */
function Loading_Home_Page_S1389_B1177()
{
    Header_Holder_S1389_B1177();
    Cloud_About_S1389_B1177();
    Title_S1389_B1177();
    Floppy_Disk_Line_S1389_B1177();
    My_Belife_S1389_B1177();
    Cloud_Work_S1389_B1177();
    Cloud_Contact_S1389_B1177();
    Welcome_S1389_B1177();
    element_S1389_B1177();
    HomeScreen_Hide_Elements();
}
function Header_Holder_S1389_B1177()
{
    Header_Holder.style.background = "transparent";
    Header_Holder.style.display = "flex";
    Header_Holder.style.position = "relative";
    Header_Holder.style.width = "100%";
    Header_Holder.style.height = "435px";
    Header_Holder.style.transition = "all  0.7s";
}
function Cloud_About_S1389_B1177()
{
    Cloud_About.style.width = "148px";
    Cloud_About.style.height = "365px";
    Cloud_About.style.position = "relative";
    Cloud_About.style.float = "left";
    Cloud_About.style.transition = "0.3";
    Cloud_About.style.left = "2%";
    Cloud_About.style.display = "block";
    Cloud_About.style.transition = "all 0.3s";
}
function Title_S1389_B1177()
{
    Title.style.left = "-2%";
    Title.style.width = "fit-content";
    Title.style.position = "relative";
    Title.style.fontSize = "20px";
    Title.style.position = "relative";
    Title.style.transition =  "all 0.7s";
    Title.style.animation = "normal";
    Title.style.float = "left";
    Title.style.textAlign = "left";
    Title.style.color = "black";
    Title.style.paddingTop = "0px";
    Title.style.paddingTop = "0px";
    Title.style.top = "0px";
}
function Floppy_Disk_Line_S1389_B1177()
{
    Floppy_Disk_Line.style.position = "relative";
    Floppy_Disk_Line.style.width = "210px";
    Floppy_Disk_Line.style.height = "375px";
    Floppy_Disk_Line.style.float = "left";
    Floppy_Disk_Line.style.transition = "all 0.5s";
    Floppy_Disk_Line.style.left = "-5%";
    Floppy_Disk_Line.style.display = "block";
}
function My_Belife_S1389_B1177()
{
    My_belief.style.left = "-8%";
    My_belief.style.position = "relative";
    My_belief.style.fontSize = "18px";
    My_belief.style.width = "fit-content";
    My_belief.style.float = "left";
    My_belief.style.transition = "all 0.7s";
    My_belief.style.animation = "normal";
    My_belief.style.textAlign = "left";
    My_belief.style.color = "black";
    My_belief.style.paddingTop = "0px";
    My_belief.style.top = "0px";
    My_belief.style.display = "block";
    My_belief.innerHTML = "<b>my agenda is to develop:</b><br> clean and efficient code<br> that functions with precision.<br> I am committed to creating designs<br> that are not only aesthetically<br> pleasing, but also punctual in their delivery.<br>I am committed to offering top-notch.";
    My_belief.style.margin = "none";
}
function  Cloud_Work_S1389_B1177()
{
    Cloud_Work.style.width = "130px";
    Cloud_Work.style.height = "440px";
    Cloud_Work.style.left = "-12%";
    Cloud_Work.style.position = "relative";
    Cloud_Work.style.float = "left";
    Cloud_Work.style.transition = "all 0.3s";
    Cloud_Work.style.display = "block";
}
function Cloud_Contact_S1389_B1177()
{
    Cloud_Contact.style.width = "126px";
    Cloud_Contact.style.height = "408px";
    Cloud_Contact.style.left = "-10%";
    Cloud_Contact.style.position = "relative";
    Cloud_Contact.style.float = "left";
    Cloud_Contact.style.transition = "all 0.3s";
    Cloud_Contact.style.display = "block";
}
function Welcome_S1389_B1177()
{
    Welcome.style.top = "0px";
    Welcome.style.display = "block";
    Welcome.style.color = "#FFFFFF";
    Welcome.style.position = "relative";
    Welcome.style.width = "fit-content";
    Welcome.style.fontSize = "18px";
    Welcome.style.left = "3%";
    Welcome.style.transition = "all 0.7s";
    Welcome.style.animation = "normal";
    Welcome.style.textAlign = "left";
    Welcome.style.paddingTop = "0px";
    Welcome.innerHTML = "<b>Welcome</b> dear visitor, I invite you to my <br>creation, please enjoy your visit in my site.<br>Feel free to reach out if anything comes to your mind.<br>Dean";
}
function element_S1389_B1177()
{
    element.style.display = "inline-block";
    element.style.position = "absolute";
    element.style.top = "32%";
    element.style.height = "70%";
    element.style.width = "100%";
    element.style.left  = "0%";
    element.style.background = "#133337";
    element.style.clipPath = "polygon(0% 0%,100% 100%, 100% 100%, 0% 100%)";
    element.style.boxSizing = "border-box";
    element.style.transition = "all 0.7s";
    element.style.zIndex = "-1";
}
/* Init home Screen small 1177 */
function Loading_Home_Page_S1177()
{
    Resize_Nav_Holder_S_1177();
    Profile_Init_S1177();
    Header_Holder_S1177();
    Cloud_About_S1177();
    Title_S1177();
    Floppy_Disk_Line_S1177();
    My_Belife_S1177();
    Cloud_Work_S11777();
    Cloud_Contact_S1177();
    Welcome_S1177();
    element_S1177();
}
function Header_Holder_S1177()
{
    Header_Holder.style.display = "block";
    Header_Holder.style.position = "relative";
    Header_Holder.style.width = "100%";
    Header_Holder.style.height = "435px";
    Header_Holder.style.transition = "all  0.7s";;
    Header_Holder.style.backgroundColor = "#133337";
}
function Cloud_About_S1177()
{
    Cloud_About.style.display = "none";
}
function Title_S1177()
{
    Title.style.left = "0%";
    Title.style.paddingTop = "10px";
    Title.style.width = "100%";
    Title.style.textAlign = "Center";
    Title.style.color = "White";
    Title.style.top = "0px";
    Title.style.fontSize = "20px";
    Title.style.top = "0px";
}
function Floppy_Disk_Line_S1177()
{
Floppy_Disk_Line.style.display = "none";
}
function My_Belife_S1177()
{
    My_belief.style.width = "100%";
    My_belief.style.margin = "none";
    My_belief.style.textAlign = "center";
    My_belief.style.left = "0%";
    My_belief.style.color = "#FFFF";
    My_belief.style.paddingTop = "50px";
    My_belief.style.top = "0%";
    My_belief.style.fontSize = "18px";
    My_belief.style.display = "block";
    My_belief.innerHTML = "<b>my agenda is to develop:</b><br> clean and efficient code<br> that functions with precision.<br> I am committed to creating designs<br> that are not only aesthetically<br> pleasing, but also punctual in their delivery.<br>I am committed to offering top-notch.";
}
function Cloud_Work_S11777()
{
    Cloud_Work.style.display = "none";
}
function Cloud_Contact_S1177()
{
    Cloud_Contact.style.display = "none";
}
function Welcome_S1177()
{
    Welcome.style.position = "relative";
    Welcome.style.top = "45px";
    Welcome.style.display = "block";
    Welcome.style.color = "#FFFFFF";
    Welcome.style.width = "100%";
    Welcome.style.left = "0%";
    Welcome.style.textAlign = "center";
    Welcome.style.paddingTop = "50px";
    Welcome.innerHTML = "<b>Welcome</b> dear visitor, I invite you to my creation, please enjoy your visit in my site.<br>Feel free to reach out if anything comes to your mind.<br>Dean";
    Welcome.style.fontSize = "18px";
}
function element_S1177()
{
    element.style.display = "inline-block";
    element.style.position = "absolute";
    element.style.top = "32%";
    element.style.height = "100%";
    element.style.width = "100%";
    element.style.left  = "0%";
    element.style.background = "#133337";
    element.style.clipPath = "none";
    element.style.boxSizing = "border-box";
    element.style.transition = "all 0.7s";
    element.style.zIndex = "-1";
}
/*init element Screen Small then 1177*/
function About_nav_init(){
    About.style.width = "70px";
    About.style.padding = "15px";
    About.style.transition = "all 0.5s";
}
function Work_nav_init(){
    Work.style.width = "70px";
    Work.style.padding = "15px";
    Work.style.transition = "all 0.5s";
}
function Contact_nav_init(){
    Contact.style.width = "70px";
    Contact.style.padding = "15px";
    Contact.style.transition = "all 0.5s";
}
function Profile_Init_S1177(){
    Profile.style.display = "block";
    Profile.style.margin = "auto";
    Profile.style.float = "none";
    Profile.style.paddingTop= "10px";
    Profile.style.position = "relative";
    Profile.style.top = "10%";
    Profile.style.borderRadius = "50%";
    Profile.style.width = "fit-content";
    Profile.style.height = "250px";
    Profile.style.transition = "all  0.7s";
}
/*Hide elements*/
function Hide_Home_Screen()
{
    Cloud_About_Hide();
    Cloud_Work_Hide();
    Cloud_Contact_Hide();
    Floppy_Disk_Hide();

}
function Cloud_About_Hide()
{
    Cloud_About.style.display = "none";

}
function Cloud_Work_Hide()
{
    Cloud_Work.style.display = "none";

}
function Cloud_Contact_Hide()
{
    Cloud_Contact.style.display = "none";
}
function Floppy_Disk_Hide()
{
    Floppy_Disk_Line.style.display = "none";
}

/* Init about Screen B1430*/
function Loading_About_Page_B1430()
{
    Nav_Holder_B1177();
    About_Title_B1430();
    About_My_Belif_B1430();
    About_Profile_B1430();
    About_Welcome_B1430();
    About_Header_Holder_B1430();
    About_Nav_Item_B1430();
    About_Education_Holder_B1430();
    About_Education_B1430();
    About_element_B1430();
    Shenkar_des_B1430();
    Floppy_Disk_B1177();
    Shenkar_Item.style.width = "600px";
    Jhon_Item.style.width = "600px";
    NetcraftAcademy_Item.style.width = "600px";
    b6_Item.style.width = "600px";
}
function About_Title_B1430()
{
    Title.style.display = "block";
    Title.style.top = "30px";
    Title.style.width = "100%";
    Title.style.textAlign = "center";
    Title.style.fontSize = "32px";
    Title.style.left = "0%";
    Title.style.color = "black";
}
function About_My_Belif_B1430()
{
    My_belief.style.fontSize = "18px";
    My_belief.style.display = "block";
    My_belief.style.width = "100%";
    My_belief.style.textAlign = "center";
    My_belief.style.top = "15%";
    My_belief.style.color = "white";
    My_belief.style.left = "0";
    My_belief.innerHTML = "<b>my agenda is to develop:</b><br> clean and efficient code<br> that functions with precision.<br> I am committed to creating designs<br> that are not only aesthetically<br> pleasing, but also punctual in their delivery.<br>I am committed to offering top-notch.";
}
function About_Profile_B1430()
{
    Profile.style.display = "block";
    Profile.style.margin = "auto";
    Profile.style.float = "none";
    Profile.style.paddingTop= "10px";
    Profile.style.position = "relative";
    Profile.style.top = "10%";
    Profile.style.borderRadius = "50%";
    Profile.style.width = "fit-content";
    Profile.style.height = "250px";
    Profile.style.transition = "all  0.7s";
    Profile.style.display = "block";
    Profile.style.float = "none";
}
function About_Welcome_B1430()
{
    Welcome.style.display = "Block";
    Welcome.style.position = "relative";
    Welcome.style.fontSize = "18px";
    Welcome.style.transition = "all 0.7s";
    Welcome.style.animation = "normal";
    Welcome.style.paddingTop = "0px";
    Welcome.style.width = "100%";
    Welcome.style.left = "0%";
    Welcome.style.textAlign = "center";
    Welcome.innerHTML = "<b>About me:</b><br> Software Engineering student with a high work ethic.<br> Detailed oriented human being with a unique point of view.";
    Welcome.style.color = "white";
    Welcome.style.top = "50px";

}
function About_Header_Holder_B1430()
{
    Header_Holder.style.display = "block";
    Header_Holder.style.height = "515px";
}
function About_Nav_Item_B1430()
{
    About.style.backgroundColor = "#133337";
    About.style.color = "white";
}
function About_Education_Holder_B1430()
{
    Education_Holder.style.position="relative";
    Education_Holder.style.display = "block";
    Education_Holder.style.top = "70px";
    Education_Holder.style.paddingBottom = "0px";
}
function About_Education_B1430(){
    Education.style.position = "relative";
    Education.style.color = "white";
}
function About_element_B1430()
{
    element.style.display = "inline-block";
    element.style.position = "absolute";
    element.style.width = "100%";
    element.style.left  = "0%";
    element.style.background = "#133337";
    element.style.boxSizing = "border-box";
    element.style.transition = "all 0.7s";
    element.style.zIndex = "-1";
    element.style.clipPath = "polygon(50% 0%,100% 100%, 100% 100%, 0% 100%)";
    element.style.top = "25%";
    element.style.height = "65%";
}
function Shenkar_des_B1430(){
    Shenkar_des.style.color = "white";
}
/*/* Init about Screen small then 1430 and biger then 800*/
function Loading_About_Page_S1430_B800()
{
    About_Header_Holder_S1430_B800();
    About_Education_Holder_S1430_B800();
    About_Title_S1430_B800();
    About_My_Belif_S1430_B800();
    About_Profile_S1430_B800();
    About_Profile_S1430_B800();
    About_Welcome_S1430_B800();
    About_Nav_Item_S1430_B800();
    About_Education_Holder_S1430_B800();
    About_element_S1430_B800();
    About_Education_S1430_B800();
    Shenkar_des_S1430_B800();
    Floppy_Disk_S1177();
    Shenkar_Item.style.width = "600px";
    Jhon_Item.style.width = "600px";
    NetcraftAcademy_Item.style.width = "600px";
    b6_Item.style.width = "600px";
}
function About_Header_Holder_S1430_B800()
{
    Header_Holder.style.height = "515px";
    Header_Holder.style.backgroundColor = "transparent";
    Header_Holder.style.display = "block";
    Header_Holder.style.position = "relative";
    Header_Holder.style.width = "100%";
    Header_Holder.style.height = "515px";
    Header_Holder.style.transition = "all 0.7s ease 0s";

}
function About_Education_Holder_S1430_B800()
{
    Education_Holder.style.position="relative";
    Education_Holder.style.display = "block";
    Education_Holder.style.top = "120px";
    Education_Holder.style.paddingBottom = "0px";
}
function About_Title_S1430_B800()
{
    Title.style.position = "relative";
    Title.style.display = "block";
    Title.style.top = "30px";
    Title.style.width = "100%";
    Title.style.textAlign = "center";
    Title.style.fontSize = "32px";
    Title.style.left = "0%";
    Title.style.color = "White";
    Title.style.fontSize = "32px";
    Title.style.transition = " all 0.7s ease 0s";
    Title.style.animation = "0s ease 0s 1 normal none running none";
    Title.style.float = "left";
    Title.style.paddingTop = "0px";
}
function About_My_Belif_S1430_B800()
{
    My_belief.style.color = "black";
    My_belief.style.display = "block";
    My_belief.style.width = "100%";
    My_belief.style.textAlign = "center";
    My_belief.style.top = "15%";
    My_belief.style.left = "0";
    My_belief.style.paddingTop = "0px";
    My_belief.style.animation = "0s ease 0s 1 normal none running none";
    My_belief.style.transition = "all 0.7s ease 0s";
    My_belief.style.float = "left";
    My_belief.style.left = "0px";
    My_belief.style.position = "relative";
    My_belief.style.fontSize = "18px";
    My_belief.innerHTML = "<b>my agenda is to develop:</b><br> clean and efficient code<br> that functions with precision.<br> I am committed to creating designs<br> that are not only aesthetically<br> pleasing, but also punctual in their delivery.<br>I am committed to offering top-notch.";
}
function About_Profile_S1430_B800()
{
    Profile.style.display = "block";
    Profile.style.margin = "auto";
    Profile.style.float = "none";
    Profile.style.paddingTop= "10px";
    Profile.style.position = "relative";
    Profile.style.top = "10%";
    Profile.style.borderRadius = "50%";
    Profile.style.width = "fit-content";
    Profile.style.height = "250px";
    Profile.style.transition = "all  0.7s";
    Profile.style.display = "block";
    Profile.style.float = "none";
}

function About_Welcome_S1430_B800()
{
    Welcome.style.display = "Block";
    Welcome.style.position = "relative";
    Welcome.style.fontSize = "18px";
    Welcome.style.transition = "all 0.7s";
    Welcome.style.animation = "normal";
    Welcome.style.paddingTop = "0px";
    Welcome.style.width = "100%";
    Welcome.style.left = "0%";
    Welcome.style.textAlign = "center";
    Welcome.innerHTML = "<b>About me:</b><br> Software Engineering student with a high work ethic.<br> Detailed oriented human being with a unique point of view.";
    Welcome.style.color = "black";
    Welcome.style.top = "100px";
}
function About_Nav_Item_S1430_B800()
{
    About.style.backgroundColor = "#133337";
    About.style.color = "white";
}

function About_Education_S1430_B800(){
    Education.style.position = "relative";
    Education.style.color = "black";
}
function About_element_S1430_B800()
{
    element.style.display = "inline-block";
    element.style.position = "absolute";
    element.style.width = "100%";
    element.style.left  = "0%";
    element.style.background = "#133337";
    element.style.boxSizing = "border-box";
    element.style.transition = "all 0.7s";
    element.style.zIndex = "-1";
    element.style.clipPath = "none";
    element.style.top = "0%";
    element.style.height = "35%";
}
function Shenkar_des_S1430_B800(){
    Shenkar_des.style.color = "black";
}

/*Form page Big 1430*/
function Contact_Loading_Page_B1430(){
    
    var w = window.innerWidth;
    Nav_Holder_B1177();
    Floppy_Disk_B1177();    
    Form_Holder_B1430();
    Contact_Title_B1430();
    Contact_Form_B1430();
    Contact_Header_Holder_B1430();
    Contact_Contact_We_B1430();
    Contact_Your_Name_B1430();
    Contact_Your_Email_B1430();
    Contact_Subject_B1430();
    Contact_Message_B1430();
    Contact_Email_input_B1430();
    Contact_Name_input_B1430();
    Contact_Subject_input_B1430();
    Contact_Message_area_B1430();
    Contact_subnmitBTN_B1430();
    Contact_element_B1430();
    Contact_Nav_Item_B1430();
    if(w<1320){
        Floppy_Disk_S1177();
    }else{
        Floppy_Disk_B1177();
    }
}
function Form_Holder_B1430(){
    Form_Holder.style.position = "relative";
    Form_Holder.style.display = "block";
    Form_Holder.style.transition = "all 0.7s";
    Form_Holder.style.paddingBottom = "50px";
}
function Contact_Title_B1430(){
    Title.style.top = "30px";
    Title.style.width = "100%";
    Title.style.textAlign = "center";
    Title.style.fontSize = "32px";   
    Title.style.left = "0%";
    Title.style.position = "relative";
    Title.style.transition =  "all 0.7s";
    Title.style.animation = "normal";
    Title.style.float = "left";
    Title.style.color = "black";
    Title.style.paddingTop = "0px";
}
function Contact_Form_B1430(){
    Form_Holder.style.display = "block";
    Contact_Form.style.position = "relative";
    Contact_Form.style.height = "710px";
    Contact_Form.style.width = "994px";
    Contact_Form.style.color = "white";
    Contact_Form.style.backgroundColor = "#133337";
    Contact_Form.style.transition = "all 1.0s";
    Contact_Form.style.boxShadow = "40px -16px #e7e7e7";
    Contact_Form.style.margin ="auto";
}
function Contact_Header_Holder_B1430()
{
    Header_Holder.style.height = "150px";
    Header_Holder.style.backgroundColor = "transparent";
    Header_Holder.style.position = "relative";
    Header_Holder.style.width = "100%";
    Header_Holder.style.transition = "all 0.7s ease 0s";
}
function Contact_Contact_We_B1430()
{
    Welcome.style.display = "none";
}
function Contact_Your_Name_B1430(){
    Your_Name.style.fontSize = "18px";
    Your_Name.style.marginLeft = "2%";
    Your_Name.style.paddingBottom = "1%";
    Your_Name.style.paddingTop = "1%";
}
function Contact_Your_Email_B1430(){
    Your_Email.style.fontSize = "18px";
    Your_Email.style.marginLeft = "2%";
    Your_Email.style.paddingBottom = "1%";
    Your_Email.style.paddingTop = "1%";
}
function Contact_Subject_B1430(){
    Subject.style.fontSize = "18px";
    Subject.style.marginLeft = "2%";
    Subject.style.paddingBottom = "1%";
    Subject.style.paddingTop = "1%";
}
function Contact_Message_B1430(){
    Message.style.fontSize = "18px";
    Message.style.marginLeft = "2%";
    Message.style.paddingBottom = "1%";
    Message.style.paddingTop = "1%";
}
function Contact_Name_input_B1430(){
    Name_input.style.marginLeft = "2%";
    Name_input.style.width = "90%";
    Name_input.style.height = "30px";
    Name_input.style.border = "0ch";
}
function Contact_Email_input_B1430(){
    Email_input.style.marginLeft = "2%";
    Email_input.style.width = "90%";
    Email_input.style.height = "30px";
    Email_input.style.border = "0ch";
}
function Contact_Subject_input_B1430(){
    Subject_input.style.marginLeft = "2%";
    Subject_input.style.width = "90%";
    Subject_input.style.height = "30px";
    Subject_input.style.border = "0ch";
}
function Contact_Message_area_B1430(){
    Message_area.style.marginLeft = "2%";
    Message_area.style.width = "90%";
    Message_area.style.height = "50%";
    Message_area.style.border = "0ch";
}
function Contact_subnmitBTN_B1430(){
    subnmitBTN.style.padding= "20px";
    subnmitBTN.style.width = "fit-content";
    subnmitBTN.style.margin = "auto";
    subnmitBTN.style.position = "relative";
    subnmitBTN.style.fontSize = "24px";
    subnmitBTN.style.color = " #e7e7e7";
    subnmitBTN.style.transition = "all 1.0s";
    subnmitBTN.style.display = "flex";
    subnmitBTN.style.backgroundColor = "transparent";
    subnmitBTN.style.border = "none";
}
function Contact_element_B1430()
{
    element.style.display = "inline-block";
    element.style.position = "absolute";
    element.style.width = "100%";
    element.style.left  = "0%";
    element.style.background = "#133337";
    element.style.boxSizing = "border-box";
    element.style.transition = "all 0.7s";
    element.style.zIndex = "-1";
    element.style.clipPath = "none";
    element.style.top = "0%";
    element.style.height = "0%";
}
function Contact_Nav_Item_B1430()
{
    Contact.style.backgroundColor = "#133337";
    Contact.style.color = "white";
}
/*Form page Small 1320*/
function Contact_Loading_Page_S1140(){
    Form_Holder_S1140();
    Contact_Title_S1140();
    Contact_Form_S1140();
    Contact_Header_Holder_S1140();
    Contact_Contact_Welcome_S1140();
    Contact_Your_Name_S1140();
    Contact_Your_Email_S1140();
    Contact_Subject_S1140();
    Contact_Message_S1140();
    Contact_Name_input_S1140();
    Contact_Email_input_S1140();
    Contact_Subject_input_S1140();
    Contact_Message_area_S1140();
    Contact_subnmitBTN_S1140();
    Contact_element_S1140();
    Contact_Nav_Item_S1140();
    Floppy_Disk_S1177();
    Resize_Nav_Holder_S_1177();
}
function Form_Holder_S1140(){
    Form_Holder.style.position = "relative";
    Form_Holder.style.display = "block";
    Form_Holder.style.transition = "all 0.7s";
    Form_Holder.style.paddingBottom = "50px";
}
function Contact_Title_S1140(){
    Title.style.top = "30px";
    Title.style.width = "100%";
    Title.style.textAlign = "center";
    Title.style.fontSize = "32px";   
    Title.style.left = "0%";
    Title.style.position = "relative";
    Title.style.transition =  "all 0.7s";
    Title.style.animation = "normal";
    Title.style.float = "left";
    Title.style.color = "black";
    Title.style.paddingTop = "0px";
}
function Contact_Form_S1140(){
    Contact_Form.style.position = "relative";
    Contact_Form.style.height = "710px";
    Contact_Form.style.width = "400px";
    Contact_Form.style.color = "white";
    Contact_Form.style.backgroundColor = "#133337";
    Contact_Form.style.transition = "all 1.0s";
    Contact_Form.style.boxShadow = "40px -16px #e7e7e7";
    Contact_Form.style.margin ="auto";
}
function Contact_Header_Holder_S1140()
{
    Header_Holder.style.height = "150px";
    Header_Holder.style.background = "transparent";
    Header_Holder.style.display = "block";
    Header_Holder.style.position = "relative";
    Header_Holder.style.width = "100%";
    Header_Holder.style.height = "150px";
    Header_Holder.style.transition = "all 0.7s ease 0s";
}
function Contact_Contact_Welcome_S1140()
{
    Welcome.style.display = "none";
}
function Contact_Your_Name_S1140(){
    Your_Name.style.fontSize = "18px";
    Your_Name.style.marginLeft = "2%";
    Your_Name.style.paddingBottom = "1%";
    Your_Name.style.paddingTop = "1%";
}
function Contact_Your_Email_S1140(){
    Your_Email.style.fontSize = "18px";
    Your_Email.style.marginLeft = "2%";
    Your_Email.style.paddingBottom = "1%";
    Your_Email.style.paddingTop = "1%";
}
function Contact_Subject_S1140(){
    Subject.style.fontSize = "18px";
    Subject.style.marginLeft = "2%";
    Subject.style.paddingBottom = "1%";
    Subject.style.paddingTop = "1%";
}
function Contact_Message_S1140(){
    Message.style.fontSize = "18px";
    Message.style.marginLeft = "2%";
    Message.style.paddingBottom = "1%";
    Message.style.paddingTop = "1%";
}
function Contact_Name_input_S1140(){
    Name_input.style.marginLeft = "2%";
    Name_input.style.width = "90%";
    Name_input.style.height = "30px";
    Name_input.style.border = "0ch";
}
function Contact_Email_input_S1140(){
    Email_input.style.marginLeft = "2%";
    Email_input.style.width = "90%";
    Email_input.style.height = "30px";
    Email_input.style.border = "0ch";
}
function Contact_Subject_input_S1140(){
    Subject_input.style.marginLeft = "2%";
    Subject_input.style.width = "90%";
    Subject_input.style.height = "30px";
    Subject_input.style.border = "0ch";
}
function Contact_Message_area_S1140(){
    Message_area.style.marginLeft = "2%";
    Message_area.style.width = "90%";
    Message_area.style.height = "50%";
    Message_area.style.border = "0ch";
}
function Contact_subnmitBTN_S1140(){
    subnmitBTN.style.paddingTop = "20px";
    subnmitBTN.style.width = "fit-content";
    subnmitBTN.style.margin = "auto";
    subnmitBTN.style.position = "relative";
    subnmitBTN.style.fontSize = "24px";
    subnmitBTN.style.color = " #e7e7e7";
    subnmitBTN.style.transition = "all 1.0s";
    subnmitBTN.style.display = "flex";
    subnmitBTN.style.backgroundColor = "transparent";
    subnmitBTN.style.border = "none";
}
function Contact_element_S1140()
{
    element.style.display = "inline-block";
    element.style.position = "absolute";
    element.style.width = "100%";
    element.style.left  = "0%";
    element.style.background = "#133337";
    element.style.boxSizing = "border-box";
    element.style.transition = "all 0.7s";
    element.style.zIndex = "-1";
    element.style.clipPath = "none";
    element.style.top = "0%";
    element.style.height = "0%";
}
function Contact_Nav_Item_S1140()
{
    Contact.style.backgroundColor = "#133337";
    Contact.style.color = "white";
}
/*Hide Form Page */
function Hide_Form_Holder(){
    Form_Holder.style.position = "none";
}
/*Work page Big 1430*/
function Work_Loading_Page_B1430(){
    Nav_Holder_B1177();
    Work_Title_B1430();
    Work_Header_Holder_B1430();
    Work_Welcome_B1430();
    Work_My_belief_B1430();
    Work_element_B1430();
    Work_Nav_Item_B1430();
    Work_Holder_B1430();
    Work_Photography_Holder_B1430();
    Work_Photography_Title_B1430();
    Work_Photography_Image_Thumb_B1430();
    Work_Holder_Right_Holder_B1430();
    Work_Holder_Left_Holder_B1430();
    Work_Photography_Desc_B1430();
    Work_Codes_Holder_B1430();
    Work_Holder_Left_Holder_Codes_B1430();
    Work_Holder_Right_Holder_Codes_B1430();
    Work_Codes_Desc_B1430();
    Work_Codes_Image_Thumb_B1430();
    Floppy_Disk_B1177();
}
function Work_Title_B1430(){
    Title.style.top = "30px";
    Title.style.width = "100%";
    Title.style.textAlign = "center";
    Title.style.fontSize = "32px";   
    Title.style.left = "0%";
    Title.style.position = "relative";
    Title.style.transition =  "all 0.7s";
    Title.style.animation = "normal";
    Title.style.float = "left";
    Title.style.color = "black";
    Title.style.paddingTop = "0px";
}
function Work_Header_Holder_B1430()
{

    Header_Holder.style.height = "150px";
    Header_Holder.style.display = "block";
    Header_Holder.style.position = "relative";
    Header_Holder.style.width = "100%";
    Header_Holder.style.transition = "all 0.7s ease 0s";
    Header_Holder.style.background = "transparent";
}
function Work_Welcome_B1430()
{
    Welcome.style.display = "none";
}
function Work_My_belief_B1430(){
    My_belief.style.display = "block";
    My_belief.style.top = "30px";
    My_belief.style.width = "100%";
    My_belief.style.textAlign = "center";
    My_belief.style.fontSize = "22px";   
    My_belief.style.left = "0%";
    My_belief.style.position = "relative";
    My_belief.style.transition =  "all 0.7s";
    My_belief.style.animation = "normal";
    My_belief.style.float = "left";
    My_belief.style.color = "black";
    My_belief.style.paddingTop = "0px";
    My_belief.innerHTML = "Let's make History!";

}
function Work_element_B1430()
{
    element.style.display = "inline-block";
    element.style.position = "absolute";
    element.style.width = "100%";
    element.style.left  = "0%";
    element.style.background = "#133337";
    element.style.boxSizing = "border-box";
    element.style.transition = "all 0.7s";
    element.style.zIndex = "-1";
    element.style.clipPath = "none";
    element.style.top = "0%";
    element.style.height = "0%";
}
function Work_Nav_Item_B1430()
{
    Work.style.backgroundColor = "#133337";
    Work.style.color = "white";
}
function Work_Holder_B1430(){
    Work_Holder.style.top = "50px";
    Work_Holder.style.position = "relative";
    Work_Holder.style.display = "block";
    Work_Holder.style.transition = "all 1.0s";
    Work_Holder.style.width = "100%";
    Work_Holder.style.height = "fit-content";
    Work_Holder.style.margin = "auto";
    Work_Holder.style.paddingBottom = "25px";
}
function Work_Photography_Holder_B1430(){
    Photography_Holder.style.display = "flex";
    Photography_Holder.style.position = "relative";
    Photography_Holder.style.transition = "all 0.5s";
}
function Work_Holder_Left_Holder_B1430(){
    Left_Holder_Potography.style.width = "100%";
    Left_Holder_Potography.style.marginBottom = "20px";
}
function Work_Holder_Right_Holder_B1430(){
    Right_Holder_Potography.style.width = "100%";
}
function Work_Photography_Title_B1430(){
    Photography_Title.style.textAlign = "center";
    Photography_Title.style.width = "fit-content";
    Photography_Title.style.margin = "auto";
    Photography_Title.style.top = "40%";
    Photography_Title.style.position = "relative";
    Photography_Title.style.display = "block";
    Photography_Title.style.fontSize = "40px";
    Photography_Title.style.borderBottom = "0px solid #191f22";
}
function Work_Photography_Desc_B1430(){
    Photography_Desc.style.fontSize = "18px";
    Photography_Desc.style.textAlign = "center";

}
function Work_Photography_Image_Thumb_B1430(){
    Photography_Image_Thumb.style.margin = "auto";
    Photography_Image_Thumb.style.display = "flex";
    Photography_Image_Thumb.style.position = "relative";
    Photography_Image_Thumb.style.height = "491px"
    Photography_Image_Thumb.style.width = "692px";
    Photography_Image_Thumb.style.transition = "all  0.3s";
}
function Work_Codes_Holder_B1430(){
    Codes_Holder.style.display = "flex";
    Codes_Holder.style.position = "relative";
    Codes_Holder.style.transition = "all 0.5s";
}
function Work_Holder_Left_Holder_Codes_B1430(){
    Left_Holder_Codes.style.width = "100%";
    Work_Codes_Title_B1430();
}
function Work_Holder_Right_Holder_Codes_B1430(){
    Right_Holder_Codes.style.width = "100%";
}
function Work_Codes_Desc_B1430(){
    Codes_Desc.style.fontSize = "18px";
    Codes_Desc.style.textAlign = "center";
}
function Work_Codes_Title_B1430(){
    Codes_Title.style.textAlign = "center";
    Codes_Title.style.width = "fit-content";
    Codes_Title.style.margin = "auto";
    Codes_Title.style.top = "40%";
    Codes_Title.style.position = "relative";
    Codes_Title.style.display = "block";
    Codes_Title.style.fontSize = "40px";
}
function Work_Codes_Image_Thumb_B1430(){
    Codes_Image_Thumb.style.margin = "auto";
    Codes_Image_Thumb.style.display = "flex";
    Codes_Image_Thumb.style.position = "relative";
    Codes_Image_Thumb.style.height = "491px"
    Codes_Image_Thumb.style.width = "692px";
    Codes_Image_Thumb.style.transition = "all  0.3s";
}
/*Work page S 1040*/
function Work_Loading_Page_S1040(){
    Resize_Nav_Holder_S_1177();
    Work_Title_S1040();
    Work_Header_Holder_S1040();
    Work_Welcome_S1040();
    Work_My_belief_S1040();
    Work_element_S1040();
    Work_Nav_Item_S1040();
    Work_Holder_S1040();
    Work_Photography_Holder_S1040();
    Work_Photography_Title_S1040();
    Work_Photography_Image_Thumb_S1040();
    Work_Holder_Right_Holder_S1040();
    Work_Holder_Left_Holder_S1040();
    Work_Photography_Desc_S1040();
    Work_Codes_Holder_S1040();
    Work_Holder_Left_Holder_Codes_S1040();
    Work_Holder_Right_Holder_Codes_S1040();
    Work_Codes_Desc_S1040();
    Work_Codes_Image_Thumb_S1040();
    Work_Codes_Title_S1040();
    Work_Photography_Title_S1040();
    Floppy_Disk_S1177();
}
function Work_Title_S1040(){
    Title.style.top = "30px";
    Title.style.width = "100%";
    Title.style.textAlign = "center";
    Title.style.fontSize = "32px";   
    Title.style.left = "0%";
    Title.style.position = "relative";
    Title.style.transition =  "all 0.7s";
    Title.style.animation = "normal";
    Title.style.float = "left";
    Title.style.color = "black";
    Title.style.paddingTop = "0px";
}


function Work_Header_Holder_S1040()
{
    Header_Holder.style.height = "150px";
    Header_Holder.style.display = "block";
    Header_Holder.style.position = "relative";
    Header_Holder.style.width = "100%";
    Header_Holder.style.transition = "all 0.7s ease 0s";
    Header_Holder.style.background = "transparent";
}
function Work_Welcome_S1040()
{
    Welcome.style.display = "none";
}
function Work_My_belief_S1040(){
    My_belief.style.display = "block";
    My_belief.style.top = "30px";
    My_belief.style.width = "100%";
    My_belief.style.textAlign = "center";
    My_belief.style.fontSize = "22px";   
    My_belief.style.left = "0%";
    My_belief.style.position = "relative";
    My_belief.style.transition =  "all 0.7s";
    My_belief.style.animation = "normal";
    My_belief.style.float = "left";
    My_belief.style.color = "black";
    My_belief.style.paddingTop = "0px";
    My_belief.innerHTML = "Let's make History!";

}
function Work_element_S1040()
{
    element.style.display = "inline-block";
    element.style.position = "absolute";
    element.style.width = "100%";
    element.style.left  = "0%";
    element.style.background = "#133337";
    element.style.boxSizing = "border-box";
    element.style.transition = "all 0.7s";
    element.style.zIndex = "-1";
    element.style.clipPath = "none";
    element.style.top = "0%";
    element.style.height = "0%";
}
function Work_Nav_Item_S1040()
{
    Work.style.backgroundColor = "#133337";
    Work.style.color = "white";
}
function Work_Holder_S1040(){
    Work_Holder.style.top = "50px";
    Work_Holder.style.position = "relative";
    Work_Holder.style.display = "block";
    Work_Holder.style.transition = "all 1.0s";
    Work_Holder.style.width = "100%";
    Work_Holder.style.height = "fit-content";
    Work_Holder.style.margin = "auto";
    Work_Holder.style.paddingBottom = "25px";
}
function Work_Photography_Holder_S1040(){
    Photography_Holder.style.display = "block";
    Photography_Holder.style.position = "relative";
    Photography_Holder.style.transition = "all 0.5s";

}
function Work_Holder_Left_Holder_S1040(){
    Left_Holder_Potography.style.width = "100%";
    Left_Holder_Potography.style.marginBottom = "0px";
}
function Work_Holder_Right_Holder_S1040(){
    Right_Holder_Potography.style.width = "100%";
}
function Work_Photography_Title_S1040(){
    Photography_Title.style.textAlign = "center";
    Photography_Title.style.width = "fit-content";
    Photography_Title.style.margin = "auto";
    Photography_Title.style.top = "0%";
    Photography_Title.style.position = "relative";
    Photography_Title.style.display = "block";
    Photography_Title.style.fontSize = "22px";
    Photography_Title.style.borderBottom = "0.5px solid #191f22";
}
function Work_Photography_Desc_S1040(){
    Photography_Desc.style.fontSize = "18px";
    Photography_Desc.style.textAlign = "center";

}
function Work_Photography_Image_Thumb_S1040(){
    Photography_Image_Thumb.style.margin = "auto";
    Photography_Image_Thumb.style.display = "flex";
    Photography_Image_Thumb.style.position = "relative";
    Photography_Image_Thumb.style.height = "100%"
    Photography_Image_Thumb.style.width = "100%";
    Photography_Image_Thumb.style.transition = "all  0.3s";
}
function Work_Codes_Holder_S1040(){
    Codes_Holder.style.display = "block";
    Codes_Holder.style.position = "relative";
    Codes_Holder.style.transition = "all 0.5s";
}
function Work_Holder_Left_Holder_Codes_S1040(){
    Left_Holder_Codes.style.width = "100%";
}
function Work_Holder_Right_Holder_Codes_S1040(){
    Right_Holder_Codes.style.width = "100%";
}
function Work_Codes_Desc_S1040(){
    Codes_Desc.style.fontSize = "18px";
    Codes_Desc.style.textAlign = "center";
}
function Work_Codes_Title_S1040(){
    Codes_Title.style.textAlign = "center";
    Codes_Title.style.width = "fit-content";
    Codes_Title.style.margin = "auto";
    Codes_Title.style.top = "0%";
    Codes_Title.style.position = "relative";
    Codes_Title.style.display = "block";
    Codes_Title.style.fontSize = "22px";
}
function Work_Codes_Image_Thumb_S1040(){
    Codes_Image_Thumb.style.margin = "auto";
    Codes_Image_Thumb.style.display = "flex";
    Codes_Image_Thumb.style.position = "relative";
    Codes_Image_Thumb.style.height = "100%"
    Codes_Image_Thumb.style.width = "100%";
    Codes_Image_Thumb.style.transition = "all  0.3s";

}

/*Navigation if the screen bigger then 1177*/
function Nav_Holder_B1177()
{
    Nav_Holder.style.bottom = "auto";
    Nav_Holder.style.zIndex = "1";
    Nav_Holder.style.display = "block";
    Nav_Holder.style.width = "min-content";
    Nav_Holder.style.height = "it-content";
    Nav_Holder.style.position = "fixed";
    Nav_Holder.style.left = "90%";
    Nav_Holder.style.top = "0%";
    Nav_Holder.style.fontSize = "20px";
    Nav_Holder.style.background = "white";
    Nav_Holder.style.borderStyle = "solid";
    Nav_Holder.style.borderColor = "#191f22";
    Nav_Holder.style.margin = "auto";
    Nav_Holder.style.transition = "all  0.7s";
    Nav_About_Item_B1177();
    Nav_Work_Item_B1177();
    Nav_Contant_Item_B1177();
    Floppy_Disk_B1177();
}
function Nav_About_Item_B1177()
{
    About.style.width = "70px";
    About.style.padding = "15px";
    About.style.transition = "all  0.5s";
}
function Resize_Nav_Holder_S_1177(){
    About_nav_init();
    Work_nav_init();
    Contact_nav_init();
    Nav_Holder.style.borderStyle = "solid";
    Nav_Holder.style.borderColor = "#191f22";
    Nav_Holder.style.display = "flex";
    Nav_Holder.style.top = "90%";
    Nav_Holder.style.left = "0%";
    Nav_Holder.style.bottom = "0%";
    About.style.margin = "auto";
    About.style.textAlign = "center";
    About.style.fontSize = "16px";
    Work.style.margin = "auto";
    Work.style.fontSize = "16px";
    Work.style.textAlign = "center";
    Contact.style.margin = "auto";
    Contact.style.fontSize = "16px";
    Contact.style.textAlign = "center";
    Nav_Holder.style.width = "-webkit-fill-available";
    Nav_Holder.style.position = "fixed";
}
function Nav_Work_Item_B1177()
{
    Work.style.width = "70px";
    Work.style.padding = "15px";
    Work.style.transition = "all  0.5s";
}
function Nav_Contant_Item_B1177()
{
    Contact.style.width = "70px";
    Contact.style.padding = "15px";
    Contact.style.transition = "all  0.5s";
}
function Floppy_Disk_B1177()
{
    Floppy_Disk.style.top = "3%";
    Floppy_Disk.style.left = "3%";
    Floppy_Disk.style.display = "block";
    Floppy_Disk.style.position = "fixed";
    Floppy_Disk.style.width = "100px";
    Floppy_Disk.style.width = "140px";
    Floppy_Disk.style.transition = "all 0.5s";
    Floppy_Disk.style.zIndex = "1";
}
function Floppy_Disk_S1177()
{
    var w = window.innerWidth;
    if(w>1000 )
    {
        Floppy_Disk.style.top ="3%";
    }else if(w<1000 ){
        Floppy_Disk.style.top = "73%";
    }

    Floppy_Disk.style.left = "3%";
    Floppy_Disk.style.display = "block";
    Floppy_Disk.style.position = "fixed";
    Floppy_Disk.style.width = "70px";
    Floppy_Disk.style.width = "90px";
    Floppy_Disk.style.transition = "all 0.5s";
    Floppy_Disk.style.zIndex = "1";
}