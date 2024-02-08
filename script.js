//1.
let resume=[{"name":"kathiravan",
"age":"25",
"gender":"male",
"qualification":"mechamical engineering",
"cgpa":"7.26",
"email":"kathiravanselvaraj10@gmail.com"}]

//2.loops for above json
for(i=0; i<resume.length; i++){
    console.log(resume[i].name)
    console.log(resume[i].age)
    console.log(resume[i].gender)
    console.log(resume[i].qualification)
    console.log(resume[i].cgpa)
    console.log(resume[i].email)

var a=resume[i]
for(var key in a){
    console.log(key,a[key])
}
}