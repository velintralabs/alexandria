# Connect this project to GitHub

The local Git repo is ready on branch `main` with the initial commit.

This Arena sandbox **cannot log into your GitHub account by itself**
(no `gh` CLI install rights, no SSH keys, no stored credentials).
Use one of the options below.

---

## Option A — HTTPS + Personal Access Token (fastest)

### 1) Create an empty GitHub repo
1. Go to [https://github.com/new](https://github.com/new)
2. Name it e.g. `alexandria-re`
3. Leave it **empty** (no README / .gitignore / license)
4. Create repository

### 2) Create a Personal Access Token
1. GitHub → Settings → Developer settings → Personal access tokens
2. Fine-grained or classic token with **`repo`** permission
3. Copy the token (you will not see it again)

### 3) Connect and push

In this project folder:

```bash
cd /home/user/alexandria-re

# Replace YOUR_USER and YOUR_REPO
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git

# Push (when prompted):
#   Username = your GitHub username
#   Password = the personal access token (NOT your GitHub password)
git push -u origin main
```

If `git remote add` says the remote already exists:

```bash
git remote set-url origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

---

## Option B — SSH key (best long-term)

```bash
# Generate key (press Enter for defaults, or set a passphrase)
ssh-keygen -t ed25519 -C "your-email@example.com"

# Show public key and add it in GitHub:
# GitHub → Settings → SSH and GPG keys → New SSH key
cat ~/.ssh/id_ed25519.pub

# Connect remote and push
cd /home/user/alexandria-re
git remote add origin git@github.com:YOUR_USER/YOUR_REPO.git
git push -u origin main
```

---

## After the first push

Normal workflow:

```bash
cd /home/user/alexandria-re
git status
git add -A
git commit -m "Describe your change"
git push
```

---

## What I need from you to finish the connection here

Reply with:

1. Your GitHub repo URL  
   Example: `https://github.com/username/alexandria-re.git`
2. Preferred auth method: **HTTPS token** or **SSH**
3. If HTTPS: paste a **Personal Access Token** with `repo` scope  
   (or say you’ll paste it only into the terminal yourself)
4. If SSH: confirm you’ve added the public key to GitHub

Then I can run the `git remote add` + `git push` commands for you.

---

## Security note

- Do **not** commit tokens into the repo.
- Prefer fine-grained tokens limited to one repository.
- You can revoke a token anytime in GitHub settings.
