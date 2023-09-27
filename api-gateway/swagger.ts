/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: Nome da Sua API
 *   description: Descrição da sua API
 *   version: 1.0.0
 */

/**
 * @swagger
 * servers:
 *   - url: http://localhost:3001
 */

/**
 * @swagger
 * tags:
 *   - name: Catalog
 *     description: Microserviço de catálogo de produtos
 */

/**
 * @swagger
 * /catalog/products:
 *   get:
 *     tags:
 *       - Catalog
 *     summary: Acessa todos os produtos cadastrados.
 *     description: Acessa todos os produtos cadastrados sendo possível ordenar por preço ou nome em ordem crescente ou decrescente.
 *     parameters:
 *       - in: query
 *         name: orderBy
 *         description: Campo para ordenar por preço ou nome. Utilize as chaves "price" ou "name"
 *         required: false
 *         schema:
 *           type: string
 *       - in: query
 *         name: order
 *         description: Campo para ordenar por ordem crescente ou decrescente. Utilize as chaves "asc" ou "desc"
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro de requisição inválida
 */

/**
 * @swagger
 * /catalog/products/{productId}:
 *   get:
 *     tags:
 *       - Catalog
 *     summary: Acessa um produto específico
 *     description: Acessa um produto específico
 *     parameters:
 *      - name: productId
 *        in: path
 *        required: true
 *        description: ID do produto
 *        schema:
 *          type: integer
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro de requisição inválida
 */

/**
 * @swagger
 * /catalog/products:
 *   post:
 *     tags:
 *       - Catalog
 *     summary: Cria um novo produto
 *     description: Cria um novo produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               image:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro de requisição inválida
 */

/**
 * @swagger
 * tags:
 *   - name: Checkout
 *     description: Microserviço de checkout
 */

/**
 * @swagger
 * /checkout/subscription:
 *   post:
 *     tags:
 *       - Checkout
 *     summary: Cria uma nova assinatura
 *     description: Cria uma nova assinatura
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               nameId:
 *                 type: string
 *               productName:
 *                 type: string
 *               productId:
 *                 type: string
 *               price:
 *                 type: number
 *               expiryDate:
 *                 type: string
 *     responses:
 *       201:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro de requisição inválida
 */

/**
 * @swagger
 * /checkout/subscription/{nameId}:
 *   get:
 *     tags:
 *       - Checkout
 *     summary: Acessa uma assinatura específica buscando pelo nome da pessoa usuária
 *     description: Acessa uma assinatura específica buscando pelo nome da pessoa usuária
 *     parameters:
 *       - name: nameId
 *         in: path
 *         required: true
 *         description: Nome da pessoa usuária
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro de requisição inválida
 */

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Microserviço de usuários
 */

/**
 * @swagger
 * /user/register:
 *   post:
 *     tags:
 *       - User
 *     summary: Cria um novo usuário
 *     description: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro de requisição inválida
 */

/**
 * @swagger
 * /user/login:
 *   post:
 *     tags:
 *       - User
 *     summary: Realiza o login de um usuário
 *     description: Realiza o login de um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resposta de sucesso
 *       400:
 *         description: Erro de requisição inválida
 */
