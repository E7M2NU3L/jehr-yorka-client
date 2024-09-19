import * as z from 'zod';

export const TeamSchema = z.object({
    name : z.string().min(2, {
        message: "Team name is too short"
    }),
    description : z.string().max(5000, {
        message: "Description is Too long"
    }),
    logo : z.string(),
    location : z.string(),
});

export const SelectTeamSchema = z.object({
    teamId : z
      .string({
        required_error: "Please select a Team to fetch.",
      })
  })