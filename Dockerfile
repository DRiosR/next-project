# Usa una imagen oficial de Node.js como base
FROM node:18-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias antes de instalar
COPY package.json package-lock.json ./

# Instala las dependencias de producción
RUN npm install --frozen-lockfile

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación de Next.js
RUN npm run build

# Usa una imagen más ligera para producción
FROM node:18-alpine AS runner

WORKDIR /app

# Copia solo los archivos necesarios desde la fase anterior
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Expone el puerto en el que corre Next.js
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]
