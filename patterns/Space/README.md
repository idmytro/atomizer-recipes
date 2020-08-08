# `Space<Axis>(<size>)`

```css
.Space<Axis>\(<size>\) {
  --space-<axis>: <size>
}

[class*=Space<Axis>] > * + *: {
  margin-<side>: var(--space-<axis>)
}
```
