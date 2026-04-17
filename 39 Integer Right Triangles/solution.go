package main

import (
	"fmt"
	// "log"
)

func main() {
	perimeter := 1000
	maxSolutions := 0
	bestPerimeter := 0
	solutionCount := make(map[int]int)

	// dia^2 = hor^2 + vert^2
	// dia + hor + vert <= perimeter
	for dia := 1; dia < perimeter; dia++ {
		for hor := 1; hor < perimeter; hor++ {
			for vert := 1; vert < perimeter; vert++ {
				p := dia + hor + vert
				if p > perimeter {
					break
				}
				if dia*dia == hor*hor+vert*vert {
					solutionCount[p]++
				}
			}
		}
	}

	// Find perimeter with most solutions
	for p, count := range solutionCount {
		if count > maxSolutions {
			maxSolutions = count
			bestPerimeter = p
		}
	}

	fmt.Printf("Perimeter: %d, Solutions: %d\n", bestPerimeter, maxSolutions)
}
