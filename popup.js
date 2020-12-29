document.getElementsByClassName("pattern_svg")[0].onload = function() {
    var svg = document.getElementsByClassName("pattern_svg")[0].contentDocument;
    var knots = svg.querySelectorAll(".kk");
    var first_knot = null;
    var first_knot_line = null;
    var second_knot = null;
    var step = parseFloat(knots[1].getAttributeNS(null, 'cx')) - parseFloat(knots[0].getAttributeNS(null, 'cx'));




    function calculateNumberOfKnots(k) {

        if (!first_knot) {
            first_knot = parseFloat(k.getAttributeNS(null, 'cx'));
            first_knot_line = parseFloat(k.getAttributeNS(null, 'cy'));
        } else if (!second_knot) {
            second_knot = parseFloat(k.getAttributeNS(null, 'cx'));
            if (parseFloat(k.getAttributeNS(null, 'cy')) != first_knot_line) {
                alert("The knots you have chosen are on different lines, can't calculate distance")
                first_knot = null;
                second_knot = null;
            } else {
                if (second_knot > first_knot) {
                    alert((second_knot - first_knot) / step + 1);
                } else {
                    alert((first_knot - second_knot) / step + 1);
                }
                first_knot = null;
                second_knot = null;
            }
        }
    }

    knots.forEach(function(el) {
        el.addEventListener("click", function(e) {
            calculateNumberOfKnots(e.target);
        });
    });
};
