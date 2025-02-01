
document.addEventListener("DOMContentLoaded", (event) => {
    set_exercise_dropdown_and_answer_ids();
    set_exercise_numbers();
});




function process_truth_table_gen_input(textarea) {
    const inputValue = textarea.value;

            // Update the output container
            output.textContent = inputValue; // Set raw content first

            // Trigger MathJax to render the input
            MathJax.typesetPromise([output]).catch((err) => console.error(err.message));
}




function set_exercise_numbers() {
    const elements = document.getElementsByClassName("exercise");
    const exercise_arr = Array.from(elements);
    exercise_arr.forEach((elem, idx) => {
        const h2 = elem.querySelector("h2");
        h2.innerHTML = `Exercise ${idx + 1}`;
    });
}



function toggle_solution(solution_id, button_elem) {
    const answer_elem = document.getElementById(solution_id);
    if (answer_elem.style.display === 'none' || !answer_elem.style.display) {
        button_elem.innerHTML = "Hide Solution"
        answer_elem.style.display = 'block';
    } else {
        answer_elem.style.display = 'none';
        button_elem.innerHTML = "Show Solution"
    }
}



function set_exercise_dropdown_and_answer_ids() {

    const elements = document.getElementsByClassName("exercise");
    const exercise_arr = Array.from(elements);

    exercise_arr.forEach((elem, idx) => {

        const dropdown_button = elem.querySelector("button");
        const solution_div = elem.querySelector(".solution");
        const solution_id = `solution-${idx}`;
        const on_click_method_call = `toggle_solution('${solution_id}', this)`;

        dropdown_button.innerHTML = "Show Solution";
        solution_div.setAttribute("id", solution_id)
        dropdown_button.setAttribute("onclick", on_click_method_call);
    })

}