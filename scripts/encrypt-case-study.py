# Encrypts a PDF for the client-side case study gate (app/case-study/[id]/unlock.tsx).
# Usage: python3 scripts/encrypt-case-study.py input.pdf public/case-studies/<id>.enc "<password>"
# Needs: pip install cryptography
# Output layout: b"IRA1" | salt (16) | iv (12) | AES-256-GCM ciphertext+tag
import os, sys
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes

ITERATIONS = 600_000
src, dst, password = sys.argv[1], sys.argv[2], sys.argv[3]
salt, iv = os.urandom(16), os.urandom(12)
key = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=salt, iterations=ITERATIONS).derive(password.encode())
data = open(src, "rb").read()
open(dst, "wb").write(b"IRA1" + salt + iv + AESGCM(key).encrypt(iv, data, None))
print("encrypted", len(data), "->", os.path.getsize(dst), "bytes")
