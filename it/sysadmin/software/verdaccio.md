# Verdaccio

## Toubles

**Connection Refused**

Find file `config.yaml` and add:

```bash 
listen:
  - 0.0.0.0:4873
```

- https://github.com/verdaccio/verdaccio/issues/356
