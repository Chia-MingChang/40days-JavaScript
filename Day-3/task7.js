/* Max of Three Numbers
Find the max number from the lot.
- [ ] Take three numbers and assign them to variables p, q, and r.
- [ ] Now find the maximum of these three numbers using the comparison operators.
*/
function findMaxOfThree(p, q, r) {
    const max= (p>q&&p>r)?p:(q>r&&q>p)?q:r;
    return max;
}
findMaxOfThree(10, 20, 30); 