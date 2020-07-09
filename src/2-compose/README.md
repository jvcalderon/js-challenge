Function composition
======================

Function composition is an operation that takes two functions f and g and produces a function h such that h(x) = g(f(x)).

Key concepts:

- To compose two functions they must be compatibles; return param of the first one must match with the type of the argument of the second one.
- Order is inverted g(f(x)) -> g ∘ f: First of all x is applied to f and result is applied to g (from inner to outer).

## Exercise

You have to create a variadic function (who can receive a not defined number of arguments) to receive functions and compose them:

<script async src="./problem.js" charset="utf-8"></script>