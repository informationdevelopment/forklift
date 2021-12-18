window.addEventListener("pageshow", function() {
    const mfa_input = document.querySelector(".PrimaryContentContainer > .TransitionContainer .ColumnContainer:nth-child(5) input.TextBox2[type=text]");
    mfa_input.autocomplete = "one-time-code";
});
