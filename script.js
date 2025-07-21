document.addEventListener("DOMContentLoaded", function () {
    const search_branch = document.getElementById("search-parameters-branch");
    const search_semester = document.getElementById("search-parameters-semester");
    const search_subject = document.getElementById("search-parameters-subject");

    if (search_branch) {
        console.log("selected search form");
    }

    Branches = [];

    fetch("data/search_parameters/parameters.json")
        .then(res => res.json())
        .then(data => {
            const branchList = data.branches;
            branchList.forEach(branch => {
                if(branch.name){
                    console.log(branch.name);
                    Branches.push(branch.name);
                }
            });

            console.log(Branches);

            const chooseBranch = document.createElement("select");
            chooseBranch.name = "selectBranch";
            chooseBranch.id = "selectBranch";
            chooseBranch.className = "search-parameters-select";
            search_branch.appendChild(chooseBranch);
            const chooseBranchDefault = document.createElement("option");
            chooseBranchDefault.disabled = true;
            chooseBranchDefault.selected = true;
            chooseBranchDefault.innerHTML = "Select Branch";
            chooseBranchDefault.className = "search-parameters-option";
            const searchBranch = document.getElementById("selectBranch");
            searchBranch.appendChild(chooseBranchDefault);

            Branches.forEach(branch => {
                const branchOption = document.createElement("option");
                branchOption.value = branch;
                branchOption.innerHTML = branch;
                branchOption.className = "search-parameters-option";
                searchBranch.appendChild(branchOption);
            });
            

            const branchOptions = document.getElementById("selectBranch");
            Semesters = [];
            semesterList = [];

            branchOptions.addEventListener("change", () => {
                branchList.forEach(branch => {
                    if(branch.name == branchOptions.value) {
                        if(branch.semesters) {
                            semesterList = branch.semesters;
                            Semesters = [];
                            semesterList.forEach(semester =>{
                                Semesters.push(semester.semester);
                            });
                            console.log(Semesters);
                        }
                    }
                });

                search_semester.innerHTML = '';

                const chooseSemester = document.createElement("select");
                chooseSemester.name = "selectSemester";
                chooseSemester.id = "selectSemester";
                chooseSemester.className = "search-parameters-select";
                search_semester.appendChild(chooseSemester);
                const chooseSemesterDefault = document.createElement("option");
                chooseSemesterDefault.disabled = true;
                chooseSemesterDefault.selected = true;
                chooseSemesterDefault.innerHTML = "Select Semester";
                chooseSemesterDefault.className = "search-parameters-option";
                const searchSemester = document.getElementById("selectSemester");
                searchSemester.appendChild(chooseSemesterDefault);


                semesterList.forEach(semester => {
                    const semesterOption = document.createElement("option");
                    semesterOption.value = semester.semester;
                    semesterOption.innerHTML = semester.semester;
                    semesterOption.className = "search-parameters-option";
                    searchSemester.appendChild(semesterOption);
                });

                searchSemester.addEventListener("change", addSubjects());
            });
            Subjects = [];
            subjectList = [];

            function addSubjects() {
                search_subject.innerHTML = "";
                const selectSemester = document.getElementById("selectSemester");
                selectSemester.addEventListener("change", () => {
                    semesterList.forEach(semester => {
                        if(semester){
                            if(semester.semester == selectSemester.value){
                                subjectList = semester.subjects;
                                Subjects = [];
                                subjectList.forEach(subject => {
                                    Subjects.push(Object.values(subject));
                                });
                            }
                        }
                    });
                    const chooseSubject = document.createElement("select");
                    chooseSubject.name = "selectSubject";
                    chooseSubject.id = "selectSubject";
                    chooseSubject.className = "search-parameters-select";
                    search_subject.appendChild(chooseSubject);
                    const chooseSubjectDefault = document.createElement("option");
                    chooseSubjectDefault.disabled = true;
                    chooseSubjectDefault.selected = true;
                    chooseSubjectDefault.innerHTML = "Select Subject";
                    chooseSubjectDefault.className = "search-parameters-option";
                    const searchSubject = document.getElementById("selectSubject");
                    searchSubject.appendChild(chooseSubjectDefault);

                    Subjects.forEach(subject => {
                        console.log(subject);
                        const subjectOption = document.createElement("option");
                        subjectOption.value = subject;
                        subjectOption.innerHTML = subject;
                        subjectOption.className = "search-parameters-option";
                        searchSubject.appendChild(subjectOption);
                    });
                });
            }
            
        });
});


const words = ["Branch", "Semester", "Subject"];
  let currentWord = 0;
  let i = 0;
  let isDeleting = false;
  let speed = 100;

  function typeWriter() {
    const element = document.getElementById("typeWriterText");
    const word = words[currentWord];

    if (isDeleting) {
      element.innerHTML = word.substring(0, i - 1);
      i--;
    } else {
      element.innerHTML = word.substring(0, i + 1);
      i++;
    }

    if (!isDeleting && i === word.length) {
      isDeleting = true;
      speed = 50;
      setTimeout(typeWriter, 1000); // Wait before deleting
      return;
    }

    if (isDeleting && i === 0) {
      isDeleting = false;
      currentWord = (currentWord + 1) % words.length; // Next word
      speed = 100;
    }

    setTimeout(typeWriter, speed);
  }

  window.onload = typeWriter;