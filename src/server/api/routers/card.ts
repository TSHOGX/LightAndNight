import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const cardRouter = createTRPCRouter({
  // hello: publicProcedure
  //   .input(z.object({ text: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input.text}`,
  //     };
  //   }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.card.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        level: true,
        image: true,
      },
    });
  }),

  getOne: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const card = await ctx.db.card.findUnique({
        where: {
          id: input.id,
        },
      });

      if (!card) {
        throw new Error("Card not found");
      }

      return card;
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        level: z.string().min(1),
        star: z.string().max(1),
        character: z.string().min(1),
        discription: z.string().min(1),
        series: z.string().min(1),
        source: z.string().min(1),
        type: z.string().min(1),
        video: z.string().min(1),
        image: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.card.create({
        data: {
          name: input.name,
          level: input.level,
          star: input.star,
          character: input.character,
          discription: input.discription,
          series: input.series,
          source: input.source,
          type: input.type,
          video: input.video,
          image: input.image,
          // createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid(), // Assuming your card has an 'id' field
        name: z.string().min(1),
        level: z.string().min(1),
        star: z.string().max(1),
        character: z.string().min(1),
        discription: z.string().min(1),
        series: z.string().min(1),
        source: z.string().min(1),
        type: z.string().min(1),
        video: z.string().min(1),
        image: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Find the card by name and level combination
      const existingCard = await ctx.db.card.findUnique({
        where: {
          name_level: {
            name: input.name,
            level: input.level,
          },
        },
      });

      // Check if the card exists
      if (!existingCard) {
        throw new Error("Card not found");
      }

      // Update the card with the new input
      const updatedCard = await ctx.db.card.update({
        where: {
          name_level: {
            name: input.name,
            level: input.level,
          },
        },
        data: {
          name: input.name,
          level: input.level,
          star: input.star,
          character: input.character,
          discription: input.discription,
          series: input.series,
          source: input.source,
          type: input.type,
          video: input.video,
          image: input.image,
        },
      });

      return updatedCard;
    }),

  // getLatest: protectedProcedure.query(({ ctx }) => {
  //   return ctx.db.post.findFirst({
  //     orderBy: { createdAt: "desc" },
  //     where: { createdBy: { id: ctx.session.user.id } },
  //   });
  // }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
