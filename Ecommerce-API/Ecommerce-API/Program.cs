using Domain.Entities;
using Ecommerce_API.Middlewares;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Repository;
using Repository.Data;
using Serilog;
using Service;
var builder = WebApplication.CreateBuilder(args);
Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(builder.Configuration)
    .WriteTo.Console()
    .WriteTo.File("Logs/log-.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();
builder.Host.UseSerilog();
var conString = builder.Configuration.GetConnectionString("Default")
    ?? throw new InvalidOperationException("Connection string 'Default' not found.");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(conString));
builder.Services.AddIdentity<AppUser, IdentityRole>(options =>
{
    options.SignIn.RequireConfirmedEmail = false; //!
})
.AddEntityFrameworkStores<AppDbContext>()
.AddDefaultTokenProviders();
builder.Services.AddRepositoryLayer();
builder.Services.AddServiceLayer();
var assemblies = AppDomain.CurrentDomain.GetAssemblies();
builder.Services.AddAutoMapper(assemblies);
builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
