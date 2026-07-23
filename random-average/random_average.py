#!/usr/bin/env python3
"""Average of K random draws from 1..N, compared to the expected mean (1 + N) / 2.

Usage:
    python3 random_average.py N K       # one experiment
    python3 random_average.py --demo    # show how the needed K grows with N

Theory
------
A uniform draw X from {1..N} has:
    mean     E[X]   = (1 + N) / 2
    variance Var[X] = (N^2 - 1) / 12

The average of K independent draws has standard error
    SE = sqrt(Var[X] / K) ~= N / sqrt(12 * K)

To land within an absolute tolerance d of (1 + N) / 2 (with ~95% confidence,
i.e. 2 standard errors), you need
    K >= (2^2) * (N^2 - 1) / (12 * d^2)  ~=  N^2 / (3 * d^2)

so for a fixed absolute accuracy, K must grow proportionally to N^2.

If instead you only want a fixed *relative* accuracy eps (tolerance
d = eps * (1 + N) / 2), the N^2 cancels and
    K >= 4/3 * eps^-2 * (N - 1) / (N + 1)  ~=  4 / (3 * eps^2)

which does not depend on N at all.
"""

import random
import sys


def average_of_draws(n: int, k: int) -> float:
    """Draw k uniform integers from 1..n and return their average."""
    return sum(random.randint(1, n) for _ in range(k)) / k


def k_for_absolute_tolerance(n: int, tol: float, z: float = 2.0) -> int:
    """Smallest K so the average is within tol of (1+n)/2 with ~95% confidence."""
    variance = (n * n - 1) / 12
    return max(1, round(z * z * variance / (tol * tol)))


def run_experiment(n: int, k: int) -> None:
    avg = average_of_draws(n, k)
    expected = (1 + n) / 2
    se = ((n * n - 1) / 12 / k) ** 0.5
    print(f"N = {n}, K = {k}")
    print(f"observed average = {avg:.4f}")
    print(f"expected (1+N)/2 = {expected:.4f}")
    print(f"difference       = {avg - expected:+.4f}  (std. error ~ {se:.4f})")


def demo(tol: float = 0.5) -> None:
    print(f"K needed to keep the average within +/-{tol} of (1+N)/2 (~95% conf.)")
    print(f"{'N':>8} {'K = N^2/(3*tol^2)':>18} {'observed avg':>14} {'expected':>10}")
    for n in (10, 100, 1_000, 10_000):
        k = k_for_absolute_tolerance(n, tol)
        avg = average_of_draws(n, k)
        print(f"{n:>8} {k:>18} {avg:>14.3f} {(1 + n) / 2:>10.1f}")
    print()
    print("Note how K grows ~100x each time N grows 10x: K is proportional to N^2.")


def main(argv: list[str]) -> None:
    if len(argv) == 2 and argv[1] == "--demo":
        demo()
    elif len(argv) == 3:
        run_experiment(int(argv[1]), int(argv[2]))
    else:
        print(__doc__)
        sys.exit(1)


if __name__ == "__main__":
    main(sys.argv)
